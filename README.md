# cypress-local-config

Cypress plugin which adds a way to override the default config by creating a `.local.json` file.

This project is heavily inspired by [cypress-extends](https://github.com/bahmutov/cypress-extends)

# Installation

Add this plugin as dependency:

```shell
npm install -D cypress-local-config
```

Next add it to the plugins file:
```shell
module.exports = (on, config) => {
  return require("cypress-local-config")(config);
}
```


# Usage

Create a `cypress.local.json` file next to the normal `cypress.json`. 
Contens of the `cypress.local.json` override all configurations taken by the normal `cypress.json` file.

## Custom config files

This plugin with custom config files, specified by the `--config-file <path>` flag.
Don't specify the `.local.json` file as config file. This plugin won't load the base file if you do that.

# Licence

MIT Licence. 
