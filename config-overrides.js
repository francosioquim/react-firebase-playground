const rewireEslint = require('react-app-rewire-eslint')

/* eslint no-unused-vars: 0 */
module.exports = function override(config, env) {
  const updatedConfig = config
  updatedConfig.resolve = {
    alias: {
      'cake-ui-v1': '@roam/cake-ui-v1',
    },
  }

  const configWithESLint = rewireEslint(updatedConfig, env)
  return configWithESLint
}
