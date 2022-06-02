pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                nodejs('node-18') {
                    sh 'npm run install'
                    sh 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'   
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'   
            }
        }
    }
}
