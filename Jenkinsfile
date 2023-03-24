pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS 19.8.1'
    }

    stages {
        stage("download depedencies"){
            steps{
                sh("npm install")
            }
        }

        stage("start"){
            steps{
                sh("npm start")
            }
        }
    }
    
    post{
        always{
            echo("Nice Gan")
        }
        success{
            echo("sukses bang")
        }
        failure{
            echo("coba lagi bang")
        }
        cleanup{
            echo("masih aman bang")
        }
    }
}