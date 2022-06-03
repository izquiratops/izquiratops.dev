pipeline {
    agent any
    
    environment {
        HOST     = credentials('Host')
        USERNAME = credentials('Username')
        PASSWORD = credentials('Password')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'

                nodejs('node-18') {
                    sh 'npm install'
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
                sh 'touch foo'
                sh 'scp -P 9022 foo pi@izquiratops.dev:'
            }
        }
    }
}
