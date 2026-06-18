require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const cors     = require('cors');
const path     = require('path');

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));   // serve frontend

// ── MongoDB connection ────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅  MongoDB connected →', process.env.MONGO_URI))
  .catch(err => { console.error('❌  MongoDB error:', err.message); process.exit(1); });

// ── User schema ───────────────────────────────────────────────
const userSchema = new mongoose.Schema({
  firstName:  { type: String, required: true, trim: true },
  lastName:   { type: String, required: true, trim: true },
  email:      { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:   { type: String, required: true },
  watchlist:  [{ type: Number }],   // array of catalog item IDs
  createdAt:  { type: Date, default: Date.now },
  lastLogin:  { type: Date },
});

const User = mongoose.model('User', userSchema);

// ── Auth middleware ───────────────────────────────────────────
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ error: 'No token provided' });
  try {
    req.user = jwt.verify(header.slice(7), process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

function makeToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// ── Routes ────────────────────────────────────────────────────

// POST /api/auth/signup
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password)
      return res.status(400).json({ error: 'All fields are required' });

    if (password.length < 8)
      return res.status(400).json({ error: 'Password must be at least 8 characters' });

    const exists = await User.findOne({ email: email.toLowerCase().trim() });
    if (exists)
      return res.status(409).json({ error: 'An account with this email already exists' });

    const hashed = await bcrypt.hash(password, 12);
    const user   = await User.create({ firstName, lastName, email, password: hashed });
    const token  = makeToken(user);

    console.log(`🆕  New user: ${email}`);
    res.status(201).json({
      token,
      user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Server error, please try again' });
  }
});

// POST /api/auth/signin
app.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: 'Email and password are required' });

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user)
      return res.status(401).json({ error: 'No account found with this email' });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ error: 'Incorrect password' });

    user.lastLogin = new Date();
    await user.save();

    const token = makeToken(user);
    console.log(`🔑  Sign in: ${email}`);
    res.json({
      token,
      user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
    });
  } catch (err) {
    console.error('Signin error:', err);
    res.status(500).json({ error: 'Server error, please try again' });
  }
});

// GET /api/auth/me  — verify token and return user
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/watchlist/add
app.post('/api/watchlist/add', authMiddleware, async (req, res) => {
  try {
    const { itemId } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $addToSet: { watchlist: itemId } },
      { new: true }
    ).select('-password');
    res.json({ watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/watchlist/remove
app.post('/api/watchlist/remove', authMiddleware, async (req, res) => {
  try {
    const { itemId } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $pull: { watchlist: itemId } },
      { new: true }
    ).select('-password');
    res.json({ watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/watchlist
app.get('/api/watchlist', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('watchlist');
    res.json({ watchlist: user.watchlist });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── Start ─────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀  Orbit server running → http://localhost:${PORT}`);
});
