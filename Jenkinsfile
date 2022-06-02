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
                
                script {
                    def remote = [:]
                    remote.name = "${HOST}"
                    remote.host = "${HOST}"
                    remote.user = "${USERNAME}"
                    remote.password = "${PASSWORD}"
                    remote.allowAnyHosts = true
                    
                    stage('Remote SSH') {
                        sshCommand remote: remote, command: "ls -lrt"
                    }
                }
            }
        }
    }
}
