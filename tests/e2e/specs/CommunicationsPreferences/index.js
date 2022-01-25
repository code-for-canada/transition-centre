import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I click on the navigation for preferences", () => {
  cy.get(`[data-test-navigation-for-preferences]`).click();
});

Then("I am provided with {string} preferences", (preferenceTitle) => {
  cy.get(`[data-test-preferences-content]`).contains(preferenceTitle);
});

When("I modify one of the fields", () => {});

When("I click on cancel", () => {});

Then("The field I modified has the value before my modification", () => {});

When("I click on save", () => {});

Then("The field I modified has the value of my modification", () => {});

Then("I am directed to preferences view page", () => {});
