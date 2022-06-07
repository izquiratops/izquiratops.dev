pipeline {
    agent any

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
                sh 'ssh -p 9022 pi@izquiratops.dev "rm -rf /var/www/izquiratops.dev"'
                sh 'scp -r -P 9022 dist pi@izquiratops.dev:/var/www/izquiratops.dev'
            }
        }
    }
}
