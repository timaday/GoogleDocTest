

class LoginPage {
    go() {
        cy.visit('/');
    }

    userName() {
        return cy.get('input#user-name');
    }

    password() {
        return cy.get('input#password');
    }

    loginButton() {
        return cy.get("input#login-button");
    }

    errorMessage() {
        return cy.get("div.error-message-container.error h3[data-test='error']")
    }

    login(username, password, secondsToLoad = 2) {
        if(username != false) {
            this.userName().type(username);
        }
        if(password != false) {
            this.password().type(password);
        }
        this.loginButton().click();

    }
}

export default LoginPage