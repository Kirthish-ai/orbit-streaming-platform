pipeline {
agent any

```
environment {
    PATH = "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
    DOCKER_USER = "kir009"
}

stages {

    stage('Check Tools') {
        steps {
            sh 'which docker'
            sh 'docker --version'
            sh 'git --version'
        }
    }

    stage('Build Frontend Image') {
        steps {
            sh 'docker build -t kir009/orbit-frontend:latest ./frontend'
        }
    }

    stage('Build Backend Image') {
        steps {
            sh 'docker build -t kir009/orbit-backend:latest ./backend'
        }
    }

    stage('Push Frontend Image') {
        steps {
            sh 'docker push kir009/orbit-frontend:latest'
        }
    }

    stage('Push Backend Image') {
        steps {
            sh 'docker push kir009/orbit-backend:latest'
        }
    }

    stage('Deploy Frontend') {
        steps {
            sh 'kubectl apply -f k8s/frontend-deployment.yaml'
            sh 'kubectl apply -f k8s/frontend-service.yaml'
        }
    }

    stage('Verify Deployment') {
        steps {
            sh 'kubectl get deployments'
            sh 'kubectl get pods'
            sh 'kubectl get services'
        }
    }
}

post {
    success {
        echo 'Orbit Pipeline Executed Successfully!'
    }

    failure {
        echo 'Orbit Pipeline Failed!'
    }
}
```

}
