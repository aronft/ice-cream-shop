const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./", // Asegúrate de que esta ruta apunte a tu aplicación Next.js
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",

        // "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/apps/web/src/$1",
    },
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
