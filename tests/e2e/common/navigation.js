const { Given } = require("cypress-cucumber-preprocessor/steps");

Given("I am on the main page", () => {
  cy.visit("/");
});

Given("I am on preferences page in edit mode", () => {
  cy.visit("/#/accountedit");
});
