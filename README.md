#  ORBIT Streaming Platform

A cloud-native video streaming platform built using Node.js, Docker, Kubernetes, Jenkins, Terraform, ELK Stack, Grafana, Prometheus, and HashiCorp Vault.

---

#  Project Overview

ORBIT is a full-stack streaming platform designed using modern DevOps practices.

The project demonstrates:

* Full Stack Application Deployment
* CI/CD Pipeline using Jenkins
* Containerization using Docker
* Kubernetes Orchestration
* Infrastructure as Code using Terraform
* Monitoring using Prometheus & Grafana
* Centralized Logging using ELK Stack
* Secret Management using HashiCorp Vault

---

#  Architecture

```text
GitHub
   │
   ▼
Jenkins CI/CD
   │
   ▼
Docker Build
   │
   ▼
Docker Hub
   │
   ▼
Kubernetes Cluster
   │
   ├── Frontend Pod
   ├── Backend Pod
   ├── Elasticsearch
   ├── Kibana
   ├── Filebeat
   ├── Prometheus
   ├── Grafana
   └── Vault
```

---

#  Tech Stack

## Frontend

* HTML
* CSS
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB

## DevOps

* Docker
* Kubernetes
* Jenkins
* Terraform

## Monitoring

* Prometheus
* Grafana

## Logging

* Elasticsearch
* Kibana
* Filebeat

## Security

* HashiCorp Vault

---

#  Project Structure

```text
Orbit/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   └── Dockerfile
│
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── backend-deployment.yaml
│   └── backend-service.yaml
│
├── terraform/
│   ├── main.tf
│   ├── provider.tf
│   ├── variables.tf
│   └── terraform.tfvars
│
├── Jenkinsfile
│
└── README.md
```

---

#  Prerequisites

Install the following:

### Node.js

[https://nodejs.org](https://nodejs.org)

### Docker

[https://www.docker.com](https://www.docker.com)

### Kubernetes

[https://kubernetes.io](https://kubernetes.io)

### Minikube

[https://minikube.sigs.k8s.io](https://minikube.sigs.k8s.io)

### Helm

[https://helm.sh](https://helm.sh)

### Terraform

[https://developer.hashicorp.com/terraform](https://developer.hashicorp.com/terraform)

### Jenkins

[https://www.jenkins.io](https://www.jenkins.io)

### Vault

[https://developer.hashicorp.com/vault](https://developer.hashicorp.com/vault)

---

#  Local Setup

## Clone Repository

```bash
git clone https://github.com/your-username/orbit.git

cd orbit
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

Backend:

```text
http://localhost:3001
```

---

## Frontend Setup

Open:

```text
frontend/index.html
```

or

```bash
npx serve frontend
```

---

#  Docker Setup

## Build Frontend Image

```bash
docker build -t orbit-frontend ./frontend
```

## Build Backend Image

```bash
docker build -t orbit-backend ./backend
```

---

## Run Containers

```bash
docker run -d -p 80:80 orbit-frontend

docker run -d -p 3001:3001 orbit-backend
```

---

#  Kubernetes Deployment

Start Minikube

```bash
minikube start
```

Apply Manifests

```bash
kubectl apply -f k8s/
```

Check Pods

```bash
kubectl get pods
```

Check Services

```bash
kubectl get svc
```

---

#  Jenkins Pipeline

Run Jenkins

```bash
docker run -p 8080:8080 jenkins/jenkins:lts
```

Configure Pipeline Job

Connect GitHub Repository

Use:

```text
Jenkinsfile
```

Pipeline Stages:

1. Check Tools
2. Build Frontend Image
3. Build Backend Image
4. Push Images to Docker Hub
5. Deploy to Kubernetes

---

#  Prometheus Setup

Install Prometheus

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm install prometheus prometheus-community/prometheus
```

Verify

```bash
kubectl get pods
```

Port Forward

```bash
kubectl port-forward svc/prometheus-server 9090:80
```

Open

```text
http://localhost:9090
```

---

#  Grafana Setup

Install Grafana

```bash
helm repo add grafana https://grafana.github.io/helm-charts

helm install grafana grafana/grafana
```

Get Password

```bash
kubectl get secret grafana \
-o jsonpath="{.data.admin-password}" | base64 --decode
```

Port Forward

```bash
kubectl port-forward svc/grafana 3000:80
```

Open

```text
http://localhost:3000
```

Username:

```text
admin
```

Password:

```text
<decoded password>
```

---

#  ELK Stack Setup

## Install Elasticsearch

```bash
helm install elasticsearch elastic/elasticsearch
```

## Install Kibana

```bash
helm install kibana elastic/kibana
```

## Install Filebeat

```bash
helm install filebeat elastic/filebeat
```

Verify

```bash
helm list
```

Expected:

```text
elasticsearch
filebeat
kibana
```

---

## Kibana

Port Forward

```bash
kubectl port-forward svc/kibana-kibana 5601:5601
```

Open

```text
http://localhost:5601
```

Create Data View

```text
filebeat-*
```

Time Field

```text
@timestamp
```

---

#  HashiCorp Vault

Install Vault

```bash
helm repo add hashicorp https://helm.releases.hashicorp.com

helm install vault hashicorp/vault
```

Port Forward

```bash
kubectl port-forward svc/vault 8200:8200
```

Open

```text
http://localhost:8200
```

---

## Store Secrets

Enable KV Engine

```text
secret/
```

Create Secret

```text
MONGO_URI
JWT_SECRET
DOCKER_USERNAME
DOCKER_PASSWORD
```

---

#  Monitoring Features

* CPU Monitoring
* Memory Monitoring
* Pod Monitoring
* Node Monitoring
* Application Monitoring
* Dashboard Visualization

---

#  Logging Features

* Centralized Logs
* Log Aggregation
* Real-time Search
* Kibana Visualization
* Elasticsearch Storage

---

#  Security Features

* Secret Storage
* Secret Rotation
* Vault Integration
* Secure Credential Access

---

