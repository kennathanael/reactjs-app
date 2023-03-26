pipeline {
    agent any

    stages {
        stage("download depedencies"){
            steps{
                nodejs ('NodeJS'){
                    batch("npm install")
                }
            }
        }

        stage("start"){
            steps{
                nodejs ('NodeJS'){
                    batch("npm start")
                }
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