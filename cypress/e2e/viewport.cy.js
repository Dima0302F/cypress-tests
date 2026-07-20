describe("Проверка размеров экрана", () => {
  it("Показывает текущий размер окна", () => {
    cy.visit("/");
    cy.window().then((win) => {
      cy.log(`Ширина: ${win.innerWidth}px, Высота: ${win.innerHeight}px`);
    });
  });
});
