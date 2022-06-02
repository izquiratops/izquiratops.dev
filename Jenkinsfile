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

                def remote = [:]
                remote.name = 'test'
                remote.host = ${{ secrets.HOST }}
                remote.user = ${{ secrets.USERNAME }}
                remote.password = ${{ secrets.PASSWORD }}
                remote.allowAnyHosts = true

                stage('Remote SSH') {
                  sshPut remote: remote, from: 'dist/', into: '/var/www/cute-hn.site'
                }
            }
        }
    }
}
