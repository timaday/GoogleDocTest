/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const cucumber = require('cypress-cucumber-preprocessor').default
const dotenv = require('dotenv')
dotenv.config();
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
    on('file:preprocessor', cucumber())

    //Test account passwords
    config.env.standard_user_password = process.env.STANDARD_USER_PASSWORD
    config.env.locked_out_user_password = process.env.LOCKED_OUT_USER_PASSWORD
    config.env.problem_user_password = process.env.PROBLEM_USER_PASSWORD
    config.env.performance_glitch_user_password = process.env.PERFORMANCE_GLITCH_USER_PASSWORD
    config.env.invalid_user_password = process.env.PERFORMANCE_GLITCH_USER_PASSWORD

    return config
}
