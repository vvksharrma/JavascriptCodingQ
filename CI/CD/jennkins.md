pipeline {
    agent any

    environment {
        PCF_API = 'https://api.run.pivotal.io'
        PCF_ORG = 'your-org'
        PCF_SPACE = 'your-space'
        PCF_APP_NAME = 'your-app-name'
        PCF_USERNAME = credentials('pcf-username') // Jenkins credential ID for PCF username
        PCF_PASSWORD = credentials('pcf-password') // Jenkins credential ID for PCF password
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Set Up Node.js') {
            steps {
                script {
                    sh 'nvm install 14'
                    sh 'nvm use 14'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to PCF') {
            steps {
                script {
                    // Install PCF CLI if not installed
                    sh 'curl -LO https://storage.googleapis.com/cf-cli/releases/v6.54.0/cf-darwin-amd64.tgz'
                    sh 'tar -xvf cf-darwin-amd64.tgz'
                    sh 'sudo mv cf /usr/local/bin'
                    
                    // Log in to PCF
                    sh 'cf login -a ${PCF_API} -u ${PCF_USERNAME} -p ${PCF_PASSWORD} -o ${PCF_ORG} -s ${PCF_SPACE}'
                    
                    // Push the application
                    sh 'cf push ${PCF_APP_NAME} -p build'
                }
            }
        }
    }
}


Explanation:
environment {} Block:

Sets environment variables required for the deployment.
Uses Jenkins credentials to securely pass PCF username and password.
stage('Checkout Code'):

Checks out the code from the repository.
stage('Set Up Node.js'):

Sets up the Node.js environment using nvm.
stage('Install Dependencies'):

Installs project dependencies using npm install.
stage('Run Tests'):

Runs the tests using npm test.
stage('Build'):

Builds the React application using npm run build.
stage('Deploy to PCF'):

Install PCF CLI: Downloads and installs the PCF CLI.
Log in to PCF: Logs in to the PCF environment using the cf login command.
Push Application: Deploys the application to PCF using the cf push command. The -p build flag specifies the path to the build directory.