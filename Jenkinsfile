@Library('helper-library') _

node {

	slackSend "Deployment Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} - (<${env.BUILD_URL}|Open>)"

	stage('Checkout') {
		checkout scm
	}

	stage('Build'){
		sh "sh generate-sdk.sh"
	}
	
}