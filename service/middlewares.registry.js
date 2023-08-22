const testMiddleware = require("./middlewares/test.middleware");

const middlewaresRegistry = {
    "testMiddleware": testMiddleware
 };

module.exports = middlewaresRegistry;