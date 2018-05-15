node {

	properties([disableConcurrentBuilds(), 
                [$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactNumToKeepStr: '5', numToKeepStr: '5']],
                parameters([string(description: '', name: 'API_VERSION'),
                            string(description: '', name: 'BRANCH_NAME')])
              ])

	def helper = new yapily.jenkins.Helper()

	slackSend "Deployment Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} - (<${env.BUILD_URL}|Open>)"

	stage('Checkout') {
		sh "git checkout ${params.BRANCH_NAME}"
	}

	stage('Build and Deploy to Git'){

		def generateSdk = sh "sh generate-sdk.sh"

		helper.runCommandAndDeployToGit(params.BRANCH_NAME,
		 								"Bump to ${params.API_VERSION}",
		  								params.apiVersion, 
		  								generateSdk)
	}
	
}