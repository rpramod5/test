pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello This is from jenkinfile' 
            }
        }
    }
}
