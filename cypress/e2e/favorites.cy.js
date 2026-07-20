describe.skip("Тесты избранного (пропущены - нет книг в приложении)", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button.btn-warning").click();
    cy.get("#mail").type("test@test.com");
    cy.get("#pass").type("test");
    cy.get('button[type="submit"]').click();
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("Должен добавить книгу в избранное", () => {
    cy.get(".card").first().find("button.btn-success").click();
    cy.get(".card").first().find("button.btn-secondary").should("be.visible");
  });

  it("Должен удалить книгу из избранного", () => {
    cy.get(".card").first().find("button.btn-success").click();
    cy.get(".card").first().find("button.btn-secondary").should("be.visible");
    cy.get(".card").first().find("button.btn-secondary").click();
    cy.get(".card").first().find("button.btn-success").should("be.visible");
  });

  it("Должен отображать избранные книги на странице Favorites", () => {
    cy.get(".card").first().find("button.btn-success").click();
    cy.get('a[href="/favorites"]').click();
    cy.get(".card").should("have.length.at.least", 1);
  });
});
