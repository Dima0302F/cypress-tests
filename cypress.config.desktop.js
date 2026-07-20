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

    // РАЗМЕРЫ ЭКРАНА ДЛЯ ДЕСКТОПА (ноутбук)
    viewportWidth: 1920, // Ширина 1920px
    viewportHeight: 1080, // Высота 1080px
  },
});
