const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')

const project = {
    basePath: __dirname,
    /** The name of the directory containing the application source code */
    srcDir: 'src',
}

const inProject = path.resolve.bind(path, project.basePath)

/* eslint no-unused-vars: 0 */
module.exports = function override(config, env) {
    const updatedConfig = config
    updatedConfig.resolve = {
        modules: [inProject(project.srcDir), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
    }

    const configWithHotLoader = rewireReactHotLoader(updatedConfig, env)

    return configWithHotLoader
}
