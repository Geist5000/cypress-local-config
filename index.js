const debug = require('debug')('@geist5000/cypress-local-config')
const deepmerge = require('deepmerge')

function loadConfig(config) {
    let filename = config.configFile;
    if (filename.endsWith(".local.json")) {
        debug("specified local file as cypress config file. Ignoring base file!")

        return undefined;
    }


    let localFilename = filename.substring(0, filename.length - 5) + ".local" + filename.substring(filename.length - 5)

    debug('trying to read local config file %s', localFilename)
    let localConfig = undefined;
    try {
        localConfig = require(localFilename)
    } catch (e) {
        debug('no local config %s found', filename)
        return undefined;
    }

    debug('local config file found %s', localFilename)
    debug('merging currently loaded config and %s', localFilename)
    return deepmerge(config, localConfig)
}

module.exports = loadConfig
