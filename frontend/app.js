/* ============================================================
   ORBIT — app.js
   ============================================================ */

'use strict';

// ── Data ──────────────────────────────────────────────────────
const IMG_BASE = 'https://image.tmdb.org/t/p/w780';
const IMG_ORIG = 'https://image.tmdb.org/t/p/original';

const catalog = [
  {
    id: 1, title: 'Dune: Part Two', type: 'FILM', year: 2024,
    rating: '8.5', duration: '166 min', pg: 'PG-13', genre: 'Sci-Fi / Adventure / Drama',
    poster: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    desc: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    director: 'Denis Villeneuve', cast: 'Timothée Chalamet, Zendaya, Rebecca Ferguson',
  },
  {
    id: 2, title: 'Oppenheimer', type: 'FILM', year: 2023,
    rating: '8.3', duration: '180 min', pg: 'R', genre: 'Drama / History / Thriller',
    poster: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    desc: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II. A sweeping portrait of one of the most pivotal and controversial figures of the 20th century.',
    director: 'Christopher Nolan', cast: 'Cillian Murphy, Emily Blunt, Matt Damon',
  },
  {
    id: 3, title: 'Interstellar', type: 'FILM', year: 2014,
    rating: '8.7', duration: '169 min', pg: 'PG-13', genre: 'Sci-Fi / Drama / Adventure',
    poster: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    desc: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival. When Earth becomes uninhabitable, humanity\'s greatest adventure begins.',
    director: 'Christopher Nolan', cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
  },
  {
    id: 4, title: 'Inception', type: 'FILM', year: 2010,
    rating: '8.8', duration: '148 min', pg: 'PG-13', genre: 'Sci-Fi / Action / Thriller',
    poster: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    desc: 'A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    director: 'Christopher Nolan', cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
  },
  {
    id: 5, title: 'The Dark Knight', type: 'FILM', year: 2008,
    rating: '9.0', duration: '152 min', pg: 'PG-13', genre: 'Action / Crime / Drama',
    poster: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop: '/nMKdUFyrkirBBii7fEiNGoVBBMF.jpg',
    desc: 'When the Joker emerges from his mysterious past and plunges Gotham City into anarchy, Batman must confront one of the greatest psychological tests of his ability to fight injustice.',
    director: 'Christopher Nolan', cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
  },
  {
    id: 6, title: 'Stranger Things', type: 'SERIES', year: 2016,
    rating: '8.7', duration: '50 min/ep', pg: 'TV-14', genre: 'Sci-Fi / Horror / Drama',
    poster: '/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    backdrop: '/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    desc: 'When a young boy disappears, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl from the Upside Down.',
    director: 'The Duffer Brothers', cast: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
  },
  {
    id: 7, title: 'The Last of Us', type: 'SERIES', year: 2023,
    rating: '8.8', duration: '60 min/ep', pg: 'TV-MA', genre: 'Drama / Action / Sci-Fi',
    poster: '/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
    backdrop: '/9IgNAEHPSQrTOGStb7buIbVIBJM.jpg',
    desc: 'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone.',
    director: 'Craig Mazin, Neil Druckmann', cast: 'Pedro Pascal, Bella Ramsey, Anna Torv',
  },
  {
    id: 8, title: 'Breaking Bad', type: 'SERIES', year: 2008,
    rating: '9.5', duration: '47 min/ep', pg: 'TV-MA', genre: 'Crime / Drama / Thriller',
    poster: '/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    backdrop: '/tsRy63x9J2F8ERlVkMoLcIzBKjO.jpg',
    desc: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family\'s future.',
    director: 'Vince Gilligan', cast: 'Bryan Cranston, Aaron Paul, Anna Gunn',
  },
  {
    id: 9, title: 'The Mandalorian', type: 'SERIES', year: 2019,
    rating: '8.7', duration: '40 min/ep', pg: 'TV-14', genre: 'Sci-Fi / Action / Adventure',
    poster: '/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    backdrop: '/9rgDLfNDCjBpIOBWDOUKQCxiWHg.jpg',
    desc: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic. He encounters a mysterious child who will change everything.',
    director: 'Jon Favreau', cast: 'Pedro Pascal, Gina Carano, Carl Weathers',
  },
  {
    id: 10, title: 'House of the Dragon', type: 'SERIES', year: 2022,
    rating: '8.4', duration: '60 min/ep', pg: 'TV-MA', genre: 'Fantasy / Drama / Action',
    poster: '/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg',
    backdrop: '/z2yahl2uefxDCl0nogcRBstwruJ.jpg',
    desc: 'The story of House Targaryen set 200 years before the events of Game of Thrones. It charts the beginning of the end of the Targaryen dynasty and the civil war that tore it apart.',
    director: 'Ryan J. Condal, Miguel Sapochnik', cast: 'Paddy Considine, Matt Smith, Emma D\'Arcy',
  },
  {
    id: 11, title: 'Avatar: The Way of Water', type: 'FILM', year: 2022,
    rating: '7.6', duration: '192 min', pg: 'PG-13', genre: 'Sci-Fi / Action / Adventure',
    poster: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    backdrop: '/198vrF8k7mFd8WPFtOTFJzgNSze.jpg',
    desc: 'Jake Sully and Neytiri have formed a family and do everything to stay together, but they must leave their home and explore the regions of Pandora when an old threat resurfaces.',
    director: 'James Cameron', cast: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
  },
  {
    id: 12, title: 'Wednesday', type: 'SERIES', year: 2022,
    rating: '8.1', duration: '45 min/ep', pg: 'TV-14', genre: 'Comedy / Horror / Mystery',
    poster: '/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
    backdrop: '/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg',
    desc: 'Follows Wednesday Addams\'s years as a student at Nevermore Academy, where she attempts to master her psychic powers, stop a monstrous killing spree, and solve a supernatural mystery.',
    director: 'Tim Burton', cast: 'Jenna Ortega, Emma Myers, Percy Hynes White',
  },
  {
    id: 13, title: 'The Batman', type: 'FILM', year: 2022,
    rating: '7.8', duration: '176 min', pg: 'PG-13', genre: 'Action / Crime / Drama',
    poster: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdrop: '/5P8SmMzeDuPxginsMoyVEHNIsm8.jpg',
    desc: 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
    director: 'Matt Reeves', cast: 'Robert Pattinson, Zoë Kravitz, Paul Dano',
  },
  {
    id: 14, title: 'Squid Game', type: 'SERIES', year: 2021,
    rating: '8.0', duration: '55 min/ep', pg: 'TV-MA', genre: 'Thriller / Drama / Action',
    poster: '/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    backdrop: '/qw3J9cNeLioOLoR68WX7z79aCdK.jpg',
    desc: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
    director: 'Hwang Dong-hyuk', cast: 'Lee Jung-jae, Park Hae-soo, Wi Ha-jun',
  },
  {
    id: 15, title: 'Tenet', type: 'FILM', year: 2020,
    rating: '7.3', duration: '150 min', pg: 'PG-13', genre: 'Action / Sci-Fi / Thriller',
    poster: '/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
    backdrop: '/wzJRB4MKi3yK138bJyuL9nx47y6.jpg',
    desc: 'Armed with only the word "Tenet", a secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III.',
    director: 'Christopher Nolan', cast: 'John David Washington, Robert Pattinson, Elizabeth Debicki',
  },
  {
    id: 16, title: 'Blade Runner 2049', type: 'FILM', year: 2017,
    rating: '8.0', duration: '164 min', pg: 'R', genre: 'Sci-Fi / Drama / Thriller',
    poster: '/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdrop: '/ilRyazdMXNgulf9FFPJ9MgXEMEgH.jpg',
    desc: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who has been missing for thirty years.',
    director: 'Denis Villeneuve', cast: 'Ryan Gosling, Harrison Ford, Ana de Armas',
  },
  {
    id: 17, title: 'Arrival', type: 'FILM', year: 2016,
    rating: '7.9', duration: '116 min', pg: 'PG-13', genre: 'Sci-Fi / Drama / Mystery',
    poster: '/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
    backdrop: '/rVBSoDkSY9cJVEWJpYFQ4hpzQlK.jpg',
    desc: 'When twelve mysterious spacecraft appear around the world, a linguist is recruited by the military to determine whether they come in peace or are a threat.',
    director: 'Denis Villeneuve', cast: 'Amy Adams, Jeremy Renner, Forest Whitaker',
  },
  {
    id: 18, title: 'The Matrix', type: 'FILM', year: 1999,
    rating: '8.7', duration: '136 min', pg: 'R', genre: 'Sci-Fi / Action / Adventure',
    poster: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop: '/lZpWprJqbIFpEV5uoHfoK0KCnTW.jpg',
    desc: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against the machine controllers of that reality.',
    director: 'The Wachowskis', cast: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
  },
  {
    id: 19, title: 'Peaky Blinders', type: 'SERIES', year: 2013,
    rating: '8.8', duration: '60 min/ep', pg: 'TV-MA', genre: 'Crime / Drama / History',
    poster: '/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg',
    backdrop: '/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg',
    desc: 'A gangster family epic set in Birmingham, England in 1919, centering on the Shelby crime family. Led by the formidable Tommy Shelby, the clan rises to unprecedented power.',
    director: 'Steven Knight', cast: 'Cillian Murphy, Helen McCrory, Paul Anderson',
  },
  {
    id: 20, title: 'Money Heist', type: 'SERIES', year: 2017,
    rating: '8.2', duration: '70 min/ep', pg: 'TV-MA', genre: 'Crime / Thriller / Drama',
    poster: '/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    backdrop: '/58PON1OznAm7wTBjTLMRrqparIF.jpg',
    desc: 'An enigmatic professor recruits a gang of robbers to pull off the biggest heist in recorded history — seizing the Royal Mint of Spain, while the police struggle to react.',
    director: 'Álex Pina', cast: 'Álvaro Morte, Úrsula Corberó, Itziar Ituño',
  },
  {
    id: 21, title: 'Succession', type: 'SERIES', year: 2018,
    rating: '8.9', duration: '60 min/ep', pg: 'TV-MA', genre: 'Drama / Comedy / Satire',
    poster: '/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg',
    backdrop: '/tQFiCQFHAhFAlJUKJiXnf3dRiAb.jpg',
    desc: 'The Roy family controls one of the biggest media and entertainment conglomerates in the world. But as the patriarch begins to show signs of aging, his four children begin fighting for control.',
    director: 'Jesse Armstrong', cast: 'Brian Cox, Jeremy Strong, Sarah Snook',
  },
  {
    id: 22, title: 'The Witcher', type: 'SERIES', year: 2019,
    rating: '8.2', duration: '60 min/ep', pg: 'TV-MA', genre: 'Fantasy / Action / Adventure',
    poster: '/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg',
    backdrop: '/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg',
    desc: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts. His fate is intertwined with a powerful sorceress.',
    director: 'Lauren Schmidt Hissrich', cast: 'Henry Cavill, Anya Chalotra, Freya Allan',
  },
];

const rows = {
  top10Track:  catalog.slice(0, 10),
  newTrack:    [catalog[0], catalog[1], catalog[6], catalog[9], catalog[10], catalog[11], catalog[12], catalog[13], catalog[14], catalog[20], catalog[21]],
  filmsTrack:  catalog.filter(m => m.type === 'FILM'),
  seriesTrack: catalog.filter(m => m.type === 'SERIES'),
  scifiTrack:  catalog.filter(m => m.genre.toLowerCase().includes('sci-fi')),
  crimeTrack:  catalog.filter(m => m.genre.toLowerCase().includes('crime') || m.title === 'The Batman'),
};

const heroItems = [catalog[0], catalog[2], catalog[3], catalog[4], catalog[6], catalog[20]];

// ── Star Canvas ───────────────────────────────────────────────
function initStars() {
  const canvas = document.getElementById('starCanvas');
  const ctx    = canvas.getContext('2d');

  const stars = [];
  const resize = () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const makeStars = () => {
    stars.length = 0;
    const count = Math.floor((canvas.width * canvas.height) / 5000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height,
        r:      Math.random() * 1.3 + 0.2,
        alpha:  Math.random(),
        speed:  Math.random() * 0.008 + 0.003,
        dir:    Math.random() > 0.5 ? 1 : -1,
      });
    }
  };

  let raf;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.alpha += s.speed * s.dir;
      if (s.alpha >= 1 || s.alpha <= 0) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.alpha * 0.7})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  };

  resize();
  makeStars();
  draw();

  window.addEventListener('resize', () => {
    resize();
    makeStars();
  });
}

// ── Hero ──────────────────────────────────────────────────────
let heroIdx   = 0;
let heroTimer = null;

function renderHero(idx, animate = false) {
  const m   = heroItems[idx];
  const bg  = document.getElementById('heroBg');
  const wrap = document.getElementById('heroContent');

  if (animate) {
    bg.style.opacity   = '0';
    wrap.style.opacity = '0';
    wrap.style.transform = 'translateY(20px)';
  }

  setTimeout(() => {
    bg.src = IMG_ORIG + (m.backdrop || m.poster);
    document.getElementById('heroTitle').textContent = m.title;
    document.getElementById('heroDesc').textContent  = m.desc;
    document.getElementById('heroMeta').innerHTML = `
      <span class="star">★ ${m.rating}</span>
      <span class="sep">·</span>
      <span>${m.year}</span>
      <span class="sep">·</span>
      <span>${m.duration}</span>
      <span class="sep">·</span>
      <span>${m.pg}</span>
      <span class="sep">·</span>
      <span class="tag">${m.genre.split('/')[0].trim()}</span>
    `;

    bg.style.opacity   = '1';
    wrap.style.opacity = '1';
    wrap.style.transform = 'translateY(0)';
  }, animate ? 350 : 0);

  // dots
  document.querySelectorAll('.hero__dot').forEach((d, i) => {
    d.classList.toggle('active', i === idx);
  });
}

function buildHeroDots() {
  const container = document.getElementById('heroDots');
  heroItems.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'hero__dot' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
    btn.addEventListener('click', () => {
      heroIdx = i;
      renderHero(i, true);
      resetHeroTimer();
    });
    container.appendChild(btn);
  });
}

function advanceHero() {
  heroIdx = (heroIdx + 1) % heroItems.length;
  renderHero(heroIdx, true);
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(advanceHero, 7500);
}

document.getElementById('heroBg').style.transition = 'opacity 0.6s ease';
document.querySelector('.hero__content') &&
  Object.assign(document.getElementById('heroContent') || {}, {});

// Also apply transitions via JS since element might not have inline style yet
const heroContentEl = document.getElementById('heroContent');
if (heroContentEl) {
  heroContentEl.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
}

document.getElementById('heroPlayBtn').addEventListener('click', () => {
  openModal(heroItems[heroIdx]);
});
document.getElementById('heroInfoBtn').addEventListener('click', () => {
  openModal(heroItems[heroIdx]);
});

// ── Cards ─────────────────────────────────────────────────────
function makeCard(movie, rank) {
  const card = document.createElement('div');
  card.className = 'card' + (rank !== undefined ? ' card--ranked' : '');
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${movie.title}, ${movie.year}`);

  card.innerHTML = `
    <div class="card__img-wrap">
      <img class="card__img" src="${IMG_BASE}${movie.poster}" alt="${movie.title}" loading="lazy" decoding="async" />
      <div class="card__overlay"></div>
      <div class="card__play">
        <svg viewBox="0 0 24 24" fill="#07070f"><polygon points="6,3 20,12 6,21"/></svg>
      </div>
      ${rank !== undefined ? `<div class="card__rank">${rank}</div>` : ''}
    </div>
    <div class="card__info">
      <div class="card__label">${movie.type} · ${movie.year}</div>
      <div class="card__name">${movie.title}</div>
    </div>
  `;

  card.addEventListener('click', () => openModal(movie));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(movie); }
  });

  return card;
}

function populateRows() {
  Object.entries(rows).forEach(([id, items]) => {
    const track = document.getElementById(id);
    if (!track) return;
    const ranked = id === 'top10Track';
    items.forEach((m, i) => track.appendChild(makeCard(m, ranked ? i + 1 : undefined)));
  });
}

// ── Arrow buttons ─────────────────────────────────────────────
function initArrows() {
  document.querySelectorAll('.row__wrap').forEach(wrap => {
    const track = wrap.querySelector('.row__track');
    const left  = wrap.querySelector('.row__arrow--left');
    const right = wrap.querySelector('.row__arrow--right');
    const amt   = (210 + 12) * 3;
    left.addEventListener('click',  () => track.scrollBy({ left: -amt, behavior: 'smooth' }));
    right.addEventListener('click', () => track.scrollBy({ left:  amt, behavior: 'smooth' }));
  });
}

// ── Scroll-reveal ─────────────────────────────────────────────
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const allRows = [...document.querySelectorAll('[data-animate]')];
      const delay   = allRows.indexOf(entry.target) * 70;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));
}

// ── Sticky nav ────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

// ── Hamburger ─────────────────────────────────────────────────
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
}

// ── Modal ─────────────────────────────────────────────────────
const overlay    = document.getElementById('modalOverlay');
const modalEl    = document.getElementById('modal');
const closeBtn   = document.getElementById('modalClose');
let   lastFocus  = null;

function openModal(movie) {
  lastFocus = document.activeElement;

  document.getElementById('modalBackdrop').src = IMG_ORIG + (movie.backdrop || movie.poster);
  document.getElementById('modalPoster').src   = IMG_BASE + movie.poster;
  document.getElementById('modalPoster').alt   = movie.title;
  document.getElementById('modalBadge').textContent = `${movie.type} · ${movie.genre.split('/')[0].trim()}`;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalDesc').textContent  = movie.desc;

  document.getElementById('modalMeta').innerHTML = `
    <span class="star">★ ${movie.rating}</span>
    <span class="pill">${movie.year}</span>
    <span class="pill">${movie.duration}</span>
    <span class="pill">${movie.pg}</span>
  `;

  document.getElementById('modalDetails').innerHTML = `
    <div class="modal__detail">
      <div class="modal__detail-label">Genre</div>
      <div class="modal__detail-val">${movie.genre}</div>
    </div>
    <div class="modal__detail">
      <div class="modal__detail-label">Year</div>
      <div class="modal__detail-val">${movie.year}</div>
    </div>
    <div class="modal__detail">
      <div class="modal__detail-label">Director</div>
      <div class="modal__detail-val">${movie.director}</div>
    </div>
    <div class="modal__detail">
      <div class="modal__detail-label">Cast</div>
      <div class="modal__detail-val">${movie.cast}</div>
    </div>
  `;

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Watchlist button
document.querySelector('.modal__watchlist')?.addEventListener('click', () => {
  const title = document.getElementById('modalTitle').textContent;
  showToast(`"${title}" added to your Watchlist`);
});

// ── Toast ─────────────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

// ── Cursor glow effect ────────────────────────────────────────
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed; pointer-events:none; z-index:9999;
    width:400px; height:400px; border-radius:50%;
    background: radial-gradient(circle, rgba(61,0,0,0.1) 0%, transparent 70%);
    transform: translate(-50%,-50%);
    transition: left 0.15s ease, top 0.15s ease;
    left: -200px; top: -200px;
  `;
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

// ── Parallax hero on scroll ───────────────────────────────────
function initParallax() {
  const bg = document.querySelector('.hero__bg-img');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      bg.style.transform = `scale(1.06) translateY(${y * 0.2}px)`;
    }
  }, { passive: true });
}

// ── Auth Modal ────────────────────────────────────────────────
const authOverlay  = document.getElementById('authOverlay');
const authModal    = document.getElementById('authModal');
const authCloseBtn = document.getElementById('authClose');
const tabSignIn    = document.getElementById('tabSignIn');
const tabSignUp    = document.getElementById('tabSignUp');
const indicator    = document.getElementById('authTabIndicator');
const panelSignIn  = document.getElementById('panelSignIn');
const panelSignUp  = document.getElementById('panelSignUp');

const API = '/api';

// Restore session from localStorage on page load
let currentUser = null;
(function restoreSession() {
  const token = localStorage.getItem('orbit_token');
  const raw   = localStorage.getItem('orbit_user');
  if (token && raw) {
    try {
      const user = JSON.parse(raw);
      currentUser = user;
      applySignedInState(user);
    } catch { localStorage.clear(); }
  }
})();

function openAuth(tab = 'signin') {
  switchAuthTab(tab === 'signup' ? 'signup' : 'signin');
  authOverlay.classList.add('open');
  authOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const firstInput = authModal.querySelector('.auth-panel.active .auth-input');
    if (firstInput) firstInput.focus();
  }, 400);
}

function closeAuth() {
  authOverlay.classList.remove('open');
  authOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  clearAuthErrors();
}

function switchAuthTab(tab) {
  const isSignUp = tab === 'signup';
  tabSignIn.classList.toggle('active', !isSignUp);
  tabSignUp.classList.toggle('active', isSignUp);
  tabSignIn.setAttribute('aria-selected', String(!isSignUp));
  tabSignUp.setAttribute('aria-selected', String(isSignUp));
  indicator.classList.toggle('right', isSignUp);
  panelSignIn.classList.toggle('active', !isSignUp);
  panelSignUp.classList.toggle('active', isSignUp);
}

// Tab clicks
tabSignIn.addEventListener('click', () => switchAuthTab('signin'));
tabSignUp.addEventListener('click', () => switchAuthTab('signup'));

// Close
authCloseBtn.addEventListener('click', closeAuth);
authOverlay.addEventListener('click', e => { if (e.target === authOverlay) closeAuth(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && authOverlay.classList.contains('open')) closeAuth(); });

// Open triggers
document.getElementById('getStartedBtn').addEventListener('click', () => openAuth('signup'));
document.getElementById('mobileGetStartedBtn').addEventListener('click', () => { closeHamburger(); openAuth('signup'); });

function closeHamburger() {
  const menu = document.getElementById('mobileMenu');
  const ham  = document.getElementById('hamburger');
  menu.classList.remove('open');
  ham.classList.remove('open');
}

// ── Password eye toggle ───────────────────────────────────────
document.querySelectorAll('.auth-eye').forEach(btn => {
  btn.addEventListener('click', () => {
    const input   = document.getElementById(btn.dataset.target);
    const isPass  = input.type === 'password';
    input.type    = isPass ? 'text' : 'password';
    btn.querySelector('.eye-show').style.display = isPass ? 'none'  : '';
    btn.querySelector('.eye-hide').style.display = isPass ? ''      : 'none';
  });
});

// ── Password strength ─────────────────────────────────────────
document.getElementById('suPass').addEventListener('input', function () {
  const val = this.value;
  const meter = document.getElementById('passStrength');
  const label = document.getElementById('passStrengthLabel');
  if (!val) { meter.removeAttribute('data-level'); label.textContent = ''; return; }
  let score = 0;
  if (val.length >= 8)               score++;
  if (/[A-Z]/.test(val))             score++;
  if (/[0-9]/.test(val))             score++;
  if (/[^A-Za-z0-9]/.test(val))      score++;
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  meter.setAttribute('data-level', score);
  label.textContent = labels[score] || '';
});

// ── Validation helpers ────────────────────────────────────────
function setFieldError(fieldId, errId, msg) {
  const field = document.getElementById(fieldId);
  const err   = document.getElementById(errId);
  if (field) field.classList.toggle('error', !!msg);
  if (field) field.classList.toggle('valid', !msg && field.querySelector('input')?.value.length > 0);
  if (err)   err.textContent = msg;
}

function clearAuthErrors() {
  document.querySelectorAll('.auth-field').forEach(f => { f.classList.remove('error', 'valid'); });
  document.querySelectorAll('.auth-error').forEach(e => { e.textContent = ''; });
  document.getElementById('passStrength').removeAttribute('data-level');
  document.getElementById('passStrengthLabel').textContent = '';
  document.getElementById('signInForm').reset();
  document.getElementById('signUpForm').reset();
}

function validateEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function setSubmitLoading(btn, loading) {
  btn.querySelector('.auth-submit__text').hidden = loading;
  btn.querySelector('.auth-submit__spinner').hidden = !loading;
  btn.disabled = loading;
}

function showAuthFormError(panelId, msg) {
  // Show a general error banner at top of form
  let banner = document.getElementById(panelId).querySelector('.auth-form-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.className = 'auth-form-banner';
    document.getElementById(panelId).querySelector('.auth-form').prepend(banner);
  }
  banner.textContent = msg;
  banner.style.display = 'flex';
  setTimeout(() => { if (banner) banner.style.display = 'none'; }, 5000);
}

// ── Sign In form ──────────────────────────────────────────────
document.getElementById('signInForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('siEmail').value.trim();
  const pass  = document.getElementById('siPass').value;
  let valid = true;

  if (!email) {
    setFieldError('siEmailField', 'siEmailErr', 'Email is required'); valid = false;
  } else if (!validateEmail(email)) {
    setFieldError('siEmailField', 'siEmailErr', 'Enter a valid email'); valid = false;
  } else { setFieldError('siEmailField', 'siEmailErr', ''); }

  if (!pass) {
    setFieldError('siPassField', 'siPassErr', 'Password is required'); valid = false;
  } else { setFieldError('siPassField', 'siPassErr', ''); }

  if (!valid) return;

  const btn = document.getElementById('signInSubmit');
  setSubmitLoading(btn, true);

  try {
    const res  = await fetch(`${API}/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: pass }),
    });
    const data = await res.json();

    if (!res.ok) {
      // Map server errors to field-level errors
      if (data.error?.toLowerCase().includes('email'))
        setFieldError('siEmailField', 'siEmailErr', data.error);
      else if (data.error?.toLowerCase().includes('password'))
        setFieldError('siPassField', 'siPassErr', data.error);
      else
        showAuthFormError('panelSignIn', data.error || 'Sign in failed');
      return;
    }

    localStorage.setItem('orbit_token', data.token);
    localStorage.setItem('orbit_user',  JSON.stringify(data.user));
    signIn(data.user);

  } catch {
    showAuthFormError('panelSignIn', 'Cannot reach server. Is it running?');
  } finally {
    setSubmitLoading(btn, false);
  }
});

// ── Sign Up form ──────────────────────────────────────────────
document.getElementById('signUpForm').addEventListener('submit', async e => {
  e.preventDefault();
  const first = document.getElementById('suFirst').value.trim();
  const last  = document.getElementById('suLast').value.trim();
  const email = document.getElementById('suEmail').value.trim();
  const pass  = document.getElementById('suPass').value;
  const terms = document.getElementById('suTerms').checked;
  let valid = true;

  if (!first) { setFieldError('suFirst', 'suFirstErr', 'Required'); valid = false; }
  else         { setFieldError('suFirst', 'suFirstErr', ''); }

  if (!last)  { setFieldError('suLast', 'suLastErr', 'Required'); valid = false; }
  else         { setFieldError('suLast', 'suLastErr', ''); }

  if (!email) {
    setFieldError('suEmail', 'suEmailErr', 'Email is required'); valid = false;
  } else if (!validateEmail(email)) {
    setFieldError('suEmail', 'suEmailErr', 'Enter a valid email'); valid = false;
  } else { setFieldError('suEmail', 'suEmailErr', ''); }

  if (!pass) {
    setFieldError('suPass', 'suPassErr', 'Password is required'); valid = false;
  } else if (pass.length < 8) {
    setFieldError('suPass', 'suPassErr', 'Minimum 8 characters'); valid = false;
  } else { setFieldError('suPass', 'suPassErr', ''); }

  const termsErr = document.getElementById('suTermsErr');
  if (!terms) { termsErr.textContent = 'You must agree to the terms'; valid = false; }
  else         { termsErr.textContent = ''; }

  if (!valid) return;

  const btn = document.getElementById('signUpSubmit');
  setSubmitLoading(btn, true);

  try {
    const res  = await fetch(`${API}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName: first, lastName: last, email, password: pass }),
    });
    const data = await res.json();

    if (!res.ok) {
      if (data.error?.toLowerCase().includes('email'))
        setFieldError('suEmail', 'suEmailErr', data.error);
      else
        showAuthFormError('panelSignUp', data.error || 'Sign up failed');
      return;
    }

    localStorage.setItem('orbit_token', data.token);
    localStorage.setItem('orbit_user',  JSON.stringify(data.user));
    signIn(data.user);

  } catch {
    showAuthFormError('panelSignUp', 'Cannot reach server. Is it running?');
  } finally {
    setSubmitLoading(btn, false);
  }
});

// ── Inline validation on blur ─────────────────────────────────
document.getElementById('siEmail').addEventListener('blur', function () {
  if (this.value && !validateEmail(this.value))
    setFieldError('siEmailField', 'siEmailErr', 'Enter a valid email');
  else if (this.value)
    setFieldError('siEmailField', 'siEmailErr', '');
});
document.getElementById('suEmail').addEventListener('blur', function () {
  if (this.value && !validateEmail(this.value))
    setFieldError('suEmail', 'suEmailErr', 'Enter a valid email');
  else if (this.value)
    setFieldError('suEmail', 'suEmailErr', '');
});

// ── Apply signed-in UI state ──────────────────────────────────
function applySignedInState(user) {
  const fullName = `${user.firstName} ${user.lastName}`;

  // Hide auth buttons
  document.getElementById('getStartedBtn').hidden       = true;
  document.getElementById('mobileGetStartedBtn').hidden = true;

  // Desktop avatar
  document.getElementById('navUser').hidden = false;
  document.getElementById('navAvatarInitial').textContent = user.firstName.charAt(0).toUpperCase();
  document.getElementById('navUserName').textContent  = fullName;
  document.getElementById('navUserEmail').textContent = user.email;

  // Mobile user block
  document.getElementById('mobileUser').hidden = false;
  document.getElementById('mobileAvatarInitial').textContent = user.firstName.charAt(0).toUpperCase();
  document.getElementById('mobileUserName').textContent  = fullName;
  document.getElementById('mobileUserEmail').textContent = user.email;
}

// ── Sign in / out ─────────────────────────────────────────────
function signIn(user) {
  currentUser = user;
  closeAuth();
  applySignedInState(user);
  showToast(`Welcome${user.firstName ? ', ' + user.firstName : ''}! 👋`);
}

function signOut() {
  currentUser = null;
  localStorage.removeItem('orbit_token');
  localStorage.removeItem('orbit_user');

  document.getElementById('getStartedBtn').hidden       = false;
  document.getElementById('mobileGetStartedBtn').hidden = false;
  document.getElementById('navUser').hidden    = true;
  document.getElementById('mobileUser').hidden = true;

  closeUserDropdown();
  showToast('You\'ve been signed out.');
}

document.getElementById('signOutBtn').addEventListener('click', signOut);
document.getElementById('mobileSignOutBtn').addEventListener('click', () => { closeHamburger(); signOut(); });

// ── Avatar dropdown ───────────────────────────────────────────
const navAvatarBtn  = document.getElementById('navAvatarBtn');
const navUserDropdown = document.getElementById('navUserDropdown');

function closeUserDropdown() {
  navUserDropdown.classList.remove('open');
  navAvatarBtn.setAttribute('aria-expanded', 'false');
}

navAvatarBtn.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = navUserDropdown.classList.toggle('open');
  navAvatarBtn.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', e => {
  if (!navAvatarBtn.contains(e.target) && !navUserDropdown.contains(e.target)) {
    closeUserDropdown();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeUserDropdown();
});

// ── View system ───────────────────────────────────────────────
const VIEW_CONFIG = {
  home: {
    eyebrow: '',
    title: '',
    items: () => [],
    ranked: false,
  },
  films: {
    eyebrow: 'Films',
    title: 'Cinema, Reimagined',
    items: () => catalog.filter(m => m.type === 'FILM'),
    ranked: false,
  },
  series: {
    eyebrow: 'Series',
    title: 'Worlds to Inhabit',
    items: () => catalog.filter(m => m.type === 'SERIES'),
    ranked: false,
  },
  new: {
    eyebrow: 'Fresh on the Platform',
    title: 'New Releases',
    items: () => [...catalog].sort((a, b) => b.year - a.year),
    ranked: false,
  },
  top10: {
    eyebrow: 'Globally Trending',
    title: 'Top 10 on Orbit',
    items: () => catalog.slice(0, 10),
    ranked: true,
  },
};

let currentView = 'home';

function setView(view) {
  if (view === currentView) return;
  currentView = view;

  const heroEl   = document.getElementById('hero');
  const mainEl   = document.getElementById('main');
  const browseEl = document.getElementById('browsePage');
  const footer   = document.querySelector('.footer');

  // Update nav active state (both desktop and mobile)
  document.querySelectorAll('[data-view]').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });

  if (view === 'home') {
    // Show hero + main, hide browse
    browseEl.classList.remove('animated');
    setTimeout(() => {
      browseEl.classList.remove('visible');
      browseEl.setAttribute('aria-hidden', 'true');
    }, 350);

    heroEl.classList.remove('hidden');
    mainEl.classList.remove('hidden');
    footer.style.display = '';

    window.scrollTo({ top: 0, behavior: 'smooth' });
    resetHeroTimer();
    return;
  }

  // Stop hero timer on non-home views
  clearInterval(heroTimer);

  // Hide hero + main
  heroEl.classList.add('hidden');
  mainEl.classList.add('hidden');

  // Build and show browse page
  const cfg   = VIEW_CONFIG[view];
  let   items = cfg.items();

  document.getElementById('browseEyebrow').textContent = cfg.eyebrow;
  document.getElementById('browseTitle').textContent   = cfg.title;

  // Reset sort
  document.getElementById('browseSort').value = 'default';

  renderBrowseGrid(items, cfg.ranked);

  browseEl.classList.add('visible');
  browseEl.setAttribute('aria-hidden', 'false');
  footer.style.display = '';

  // Trigger animation next frame
  requestAnimationFrame(() => {
    requestAnimationFrame(() => browseEl.classList.add('animated'));
  });

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Wire sort for this view
  const sortEl = document.getElementById('browseSort');
  // Remove old listener by cloning
  const newSort = sortEl.cloneNode(true);
  sortEl.parentNode.replaceChild(newSort, sortEl);
  newSort.addEventListener('change', () => {
    const sorted = sortItems([...items], newSort.value);
    renderBrowseGrid(sorted, cfg.ranked);
  });
}

function sortItems(items, mode) {
  switch (mode) {
    case 'rating':    return items.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    case 'year-desc': return items.sort((a, b) => b.year - a.year);
    case 'year-asc':  return items.sort((a, b) => a.year - b.year);
    case 'az':        return items.sort((a, b) => a.title.localeCompare(b.title));
    default:          return items;
  }
}

function renderBrowseGrid(items, ranked) {
  const grid = document.getElementById('browseGrid');
  grid.innerHTML = '';

  if (!items.length) {
    grid.innerHTML = `
      <div class="browse__empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        Nothing here yet.
      </div>`;
    return;
  }

  items.forEach((movie, i) => {
    const card = makeCard(movie, ranked ? i + 1 : undefined);
    card.style.animationDelay = `${Math.min(i * 35, 600)}ms`;
    grid.appendChild(card);
  });
}

function initViewNav() {
  // All elements with data-view (nav links + mobile menu links)
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const view = el.dataset.view;
      setView(view);

      // Close mobile menu if open
      const menu = document.getElementById('mobileMenu');
      const ham  = document.getElementById('hamburger');
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        ham.classList.remove('open');
      }
    });
  });
}

// ── Boot ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initStars();
  buildHeroDots();
  renderHero(0);
  resetHeroTimer();

  populateRows();
  initArrows();
  initReveal();
  initNav();
  initHamburger();
  initViewNav();
  initCursorGlow();
  initParallax();

  // Stagger card entrance animation per row
  document.querySelectorAll('.row__track').forEach(track => {
    const cards = track.querySelectorAll('.card');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        cards.forEach((card, i) => {
          card.style.opacity   = '0';
          card.style.transform = 'translateY(24px)';
          card.style.transition = `opacity 0.5s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms`;
          setTimeout(() => {
            card.style.opacity   = '1';
            card.style.transform = 'translateY(0)';
          }, i * 40 + 80);
        });
        io.unobserve(track);
      });
    }, { threshold: 0.05 });
    io.observe(track);
  });
});
