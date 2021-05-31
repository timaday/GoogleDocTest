import {Before,After,Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../PageObjects/LoginPage";
import Tester from "../../Testers/Tester";

//PageObjects
const loginPage = new LoginPage();

Before(() => {
    Cypress.Cookies.debug(true);
    cy.clearBrowserData();
})

After(() => {
    cy.clearBrowserData();
})

Given("I am viewing the saucedemo app", () => {
    cy.visit('/');
})

When("I navigate to {string}", (uri) => {
    cy.visit(uri,{failOnStatusCode: false});
})

When("I login as {string}( with correct password)", (username) => {
    var password = Tester.getPasswordByUserName(username);
    loginPage.login(username, password);
})

When("I login as {string} the page loads within {int} seconds", (username,secondsToLoad) => {
    var password = Tester.getPasswordByUserName(username);
    loginPage.login(username, password);
    let now = new Date()
    now.setSeconds(now.getSeconds() + secondsToLoad)
    cy.wrap(now.getTime()).then((max) => {
        cy.log("max: " + max)
        cy
            .url()
            .should('contain', Cypress.config().baseUrl )
            .then(() => {
                let pageLoadEnd = new Date().getTime();
                if(pageLoadEnd > max) {
                    throw new Error(`Page took longer than ${secondsToLoad} seconds to load`)
                }
            })})
})

When("I login with no username and password as {string}", (password) => {
    loginPage.login(false, password);
})

When("I login with no password and username as {string}", (username) => {
    loginPage.login(username, false);
})

Then("I should not see any error message", () => {
    loginPage.errorMessage()
        .should('not.exist')
})

Then("I should see the following error message:", quote => {
    loginPage.errorMessage()
        .should('have.text', quote)
})

Then("(I am redirected to)/(the uri is) {string}", (uri) => {
    cy.url()
        .should('eq', Cypress.config().baseUrl + uri)
})


