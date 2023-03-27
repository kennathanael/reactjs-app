pipeline {
    agent any

    stages {
        stage("download depedencies"){
            steps{
                nodejs ('NodeJS'){
                    sh('npm install')
                }
            }
        }

        stage("build"){
            steps{
                nodejs ('NodeJS'){
                    sh('npm build')
                }
            }
        }

        stage("run dev"){
            steps{
                nodejs ('NodeJS'){
                    sh('npm run dev')
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