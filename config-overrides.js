const rewireEslint = require('react-app-rewire-eslint')
const path = require('path')

const project = {
  basePath: __dirname,
  /** The name of the directory containing the application source code */
  srcDir: 'src',
}

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = file => inProject(project.srcDir, file)

/* eslint no-unused-vars: 0 */
module.exports = function override(config, env) {
  const updatedConfig = config
  updatedConfig.resolve = {
    alias: {
      'cake-ui-v1': '@roam/cake-ui-v1',
      'cake-ui-v1-icons': '@roam/cake-ui-v1-icons',
    },
    modules: [inProject(project.srcDir), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  }

  const configWithESLint = rewireEslint(updatedConfig, env)
  return configWithESLint
}
