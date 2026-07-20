describe("Первый тест", () => {
  it("Должна открываться главная страница", () => {
    cy.visit("/");
    cy.contains("Books list").should("be.visible");
  });
});
