const testFunctions = require("./functions/test.functions");

const functionsRegistry = {
  "createTestData" : testFunctions.createTestData,
  "deleteTestData" : testFunctions.deleteTestData,
  "readTestData"   : testFunctions.readTestData,
  "readTestDataAll": testFunctions.readTestDataAll,
  "updateTestData" : testFunctions.updateTestData,
};

exports.functionsRegistry = functionsRegistry;