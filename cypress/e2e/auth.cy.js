describe("Тесты авторизации", () => {
  it("Должен успешно войти с test@test.com", () => {
    cy.visit("/");
    cy.get("button.btn-warning").click();
    cy.get("#mail").type("test@test.com");
    cy.get("#pass").type("test");
    cy.get('button[type="submit"]').click();
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("Должен успешно войти с bropet@mail.ru", () => {
    cy.visit("/");
    cy.get("button.btn-warning").click();
    cy.get("#mail").type("bropet@mail.ru");
    cy.get("#pass").type("123");
    cy.get('button[type="submit"]').click();
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Не должен входить с неверным паролем", () => {
    cy.visit("/");
    cy.get("button.btn-warning").click();
    cy.get("#mail").type("test@test.com");
    cy.get("#pass").type("wrongpassword");
    cy.get('button[type="submit"]').click();

    // Проверяем сообщение об ошибке
    cy.get(".text-danger.font-weight-bold.show").should("be.visible");
  });
});
