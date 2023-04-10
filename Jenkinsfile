node('BoldBI') {
    timestamps {
        timeout(time: 7200000, unit: 'MILLISECONDS') {
         
            stage('Checkout') {
                try {
                    checkout scm
                } catch (Exception e) {
                    currentBuild.result = 'FAILURE'
                }
            }
	    if(currentBuild.result != 'FAILURE'){		   
	stage('Install Software') {
		try
		{
			nodejs(nodeJSInstallationName: 'nodejs-16.17.0') {
			    bat 'npm config ls'
			}

			env.PATH = "C:\\tools\\jenkins.plugins.nodejs.tools.NodeJSInstallation\\nodejs-16.17.0;${env.PATH}"
			bat 'npm -v'
			bat 'npm install gulp -g'
			bat 'npm install -g typescript'
			bat 'tsc -v'
		}
		 catch(Exception e)
		 {
		    echo "Exception in software installation stage \r\n"+e
			currentBuild.result = 'FAILURE'
		 }
		}
	}
            if (currentBuild.result != 'FAILURE') {
                stage('Build') {
                    try {
                        gitlabCommitStatus("Build") {
                            echo '-Target build'
                            bat 'npm install'
                            bat 'npm run build'
                            echo 'Finished executing task: build'
                        }
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                    }
                }
            }

            if (currentBuild.result != 'FAILURE') {
                stage('Code Violation') {
                    try {
                        gitlabCommitStatus("Code Violation") {
                            bat 'gulp lint'
                        }
                    } catch (Exception e) {

                        status = "Code Violation-Failed"
                            currentBuild.result = 'FAILURE'
                    }
                }
            }
            if (currentBuild.result != 'FAILURE') {
                stage('Test') {
                    try {
                        gitlabCommitStatus("Test") {
                            //bat 'npm run testcases'
                        }

                    } catch (Exception e) {

                        status = "Code coverage-Failed"
                            currentBuild.result = 'FAILURE'
                    }
                }
            }
            if (currentBuild.result != 'FAILURE') {
                stage('Code coverage') {
                    try {
                        gitlabCommitStatus("Code coverage") {
                            //bat 'npm run coverage'
                        }

                    } catch (Exception e) {

                        status = "Code coverage-Failed"
                            currentBuild.result = 'FAILURE'
                    }
                }
            }

            //if (currentBuild.result != 'FAILURE' && env.publishBranch.contains(githubSourceBranch)) {
                //stage('Publish') {
                   // try {
                     //   gitlabCommitStatus("Publish") {
                        //    bat 'npm run publish'
						//	bat 'gulp nuget-pack --designerversion '+env.studio_version+' --revision '+env.revisionnumber
                         //   bat 'gulp nuget-push --nexusurl '+env.nugetserverurls+' --nexuskey '+env.nugetapikey
                        //}
                    //} catch (Exception e) {
                   //     currentBuild.result = 'FAILURE'
                   // }
                //}
           // }

            stage('Delete WorkSpace') {
                // Archiving artifacts when the folder was not empty

                def files = findFiles(glob: '**/cireports/**/*.*')

                    if (files.size() > 0) {
                        archiveArtifacts artifacts: 'cireports/',
                        excludes: null
                    }

                    deleteDir()
            }

        }
    }
}
