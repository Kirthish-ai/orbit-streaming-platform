pipeline {
    agent any

    stages {

        stage('Build Frontend') {
            steps {
                sh 'docker build -t orbit-frontend ./frontend'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t orbit-backend ./backend'
            }
        }

        stage('Deploy Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}