class Tester {

    static getPasswordByUserName(username) {
        let password = Cypress.env(username + '_password');
        if (password === undefined) {
            throw new Error(
                `Unable to load password for '${username}'. Please check configuration.`
            );
        }
        return password
    }
}

export default Tester