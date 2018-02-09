const rewireEslint = require('react-app-rewire-eslint')

/* eslint no-unused-vars: 0 */
module.exports = function override(config, env) {
  const configWithESLint = rewireEslint(config, env)
  return configWithESLint
}
