module.exports = {
    ignorePatterns: ["**/node_modules/*", ".eslintrc.js", "commitlint.config.js" ],
    overrides: [
        {
            files: ["service/**/*.js"],
            // Extend or merge with the service-specific configuration
            ...require("./.eslint/service/.eslintrc.js"),
          },
          {
            files: ["app/**/*.js"],
            // Extend or merge with the app-specific configuration
            ...require("./.eslint/app/.eslintrc.js"),
          },
    ]
  };
  