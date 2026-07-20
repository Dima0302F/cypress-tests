const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Базовый URL приложения
    baseUrl: "http://localhost:3000",

    // Путь к файлу поддержки
    supportFile: "cypress/support/e2e.js",

    // Где искать тесты
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // Настройки повторных запусков при падении
    retries: {
      runMode: 2, // В режиме run (headless)
      openMode: 0, // В режиме open (с браузером)
    },

    // РАЗМЕРЫ ЭКРАНА ДЛЯ МОБИЛЬНЫХ (телефон)
    viewportWidth: 375, // Ширина как у iPhone 12/13/14
    viewportHeight: 812, // Высота как у iPhone 12/13/14
  },
});
