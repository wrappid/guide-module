module.exports = {
    ignorePatterns: ["**/node_modules/*", ".eslintrc.js", "commitlint.config.js", "attributions.gen.js" ],
    overrides: [
        {
            files: ["service/**/*.ts", "test/service/**/*.ts"],
            // Extend or merge with the service-specific configuration
            ...require("./.eslint/service/.eslintrc.js"),
          },
          {
            files: ["app/**/*.js", "test/test/app/**/*.js"],
            // Extend or merge with the app-specific configuration
            ...require("./.eslint/app/.eslintrc.js"),
          },
    ]
  };
  
