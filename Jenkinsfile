pipeline {
    agent 
    
    tools{
        nodejs, "NodeJS"
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