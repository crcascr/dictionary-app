module.exports = {
    setupFilesAfterEnv: ['./src/app/setupTests.ts'], // Ruta relativa al archivo jest.config.js
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testMatch: [
      '**/src/app/test/**/*.test.tsx'
    ],
  };
  