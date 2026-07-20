// Кастомная команда для логина
Cypress.Commands.add("login", (email = "test@test.com", password = "test") => {
  cy.visit("/");
  cy.get("button.btn-warning").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.get('button[type="submit"]').click();
  cy.contains(`Добро пожаловать ${email}`).should("be.visible");
});
