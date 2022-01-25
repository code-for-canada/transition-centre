Cypress.Commands.add("the", (testSelector) =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("clickThe", (testSelector) => {
  cy.get(`[data-test-${testSelector}]`).click();
});
Cypress.Commands.add("clickTheFirst", (testSelector) => {
  cy.get(`[data-test-${testSelector}]`).eq(0).click();
});
Cypress.Commands.add("theFirst", (testSelector) =>
  cy.get(`[data-test-${testSelector}]`).eq(0)
);
Cypress.Commands.add("fillOutThe", (testSelector) =>
  cy.get(`[data-test-${testSelector}]`)
);
Cypress.Commands.add("with", { prevSubject: true }, (form, formData) => {
  cy.wrap(Object.keys(formData)).each((key) => {
    cy.get(form).find(`[name=${key}]`).type(formData[key]);
  });
  cy.get(form).submit();
});
