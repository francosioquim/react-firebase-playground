const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireDefinePlugin = require('react-app-rewire-define-plugin')
const path = require('path')
const dotenv = require('dotenv')
const project = {
    basePath: __dirname,
    /** The name of the directory containing the application source code */
    srcDir: 'src',
}
const inProject = path.resolve.bind(path, project.basePath)

/* eslint no-unused-vars: 0 */
module.exports = function override(config, env) {
    const envConfig = dotenv.config().parsed
    const envKeys = Object.keys(envConfig).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(envConfig[next])
        return prev
    }, {})
    config = rewireDefinePlugin(config, env, envKeys)
    config.resolve = {
        modules: [inProject(project.srcDir), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
    }

    config = rewireReactHotLoader(config, env)

    return config
}
