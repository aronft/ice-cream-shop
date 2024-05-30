const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./", // Asegúrate de que esta ruta apunte a tu aplicación Next.js
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",

        // "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.(t|j)sx?$": "ts-jest",
    },
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
        "^@/(.*)$": "<rootDir>/apps/web/src/$1",
    },
    testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
