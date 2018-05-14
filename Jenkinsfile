@Library('helper-library') _

node {

	properties([disableConcurrentBuilds(), 
                [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactNumToKeepStr: '5', numToKeepStr: '5']],
                parameters([string(description: '', name: 'API_VERSION'),
                            string(description: '', name: 'BRANCH_NAME')])
              ])

	def helper = new yapily.jenkins.Helper()

	slackSend "Deployment Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} - (<${env.BUILD_URL}|Open>)"

	stage('Checkout') {
		checkout scm
	}

	stage('Build'){
		sh "sh generate-sdk.sh"
	}

	stage('Deploy to GitHub'){
		helper.pushToGit(params.BRANCH_NAME, "Bump to ${params.API_VERSION}", params.apiVersion)
	}
	
}