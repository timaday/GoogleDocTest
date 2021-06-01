# LoginTest
The automation for the login functionality has been created using Cypress.

https://docs.cypress.io/guides

The examples for these tests can be found in
```
cypress/integration/LoginTest.feature
```
And the step definitions for this feature can be found in 
```
cypress/integration/LoginTest.LoginTest.steps.js
```

The page object model was utilised, the classes can be found in
```
cypress/PageObjects
```

### COMANDS
#### Set up
please install the npm dependances: 
```
npm install
```
#### Suite
To run the suite: 
(you must have the browser installed locally)
```
cypress run --browser chrome --headed
```
#### Report
To run the report after suite has run: 
```
npm run report
```
You can then find the html report in the following location:
```
cypress/report/html/index.html
```




