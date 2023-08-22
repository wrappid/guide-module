const { getTestAll, getTest, postTest, putTest, patchTest } = require("../validations/test.validation");

const validationsRegistry = {
    getTestAll, getTest, postTest, putTest, patchTest
};

module.exports = validationsRegistry;