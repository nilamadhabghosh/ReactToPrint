#!/usr/bin/env groovy

library identifier: 'jenkins-build@master', retriever: modernSCM([
  $class: 'GitSCMSource',
  credentialsId: 'cerner_github_credentials',
  remote: 'https://github.cerner.com/sre/jenkins-build-library.git'
])

rubyCIPipeline()
