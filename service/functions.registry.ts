import * as testFunctions from "./functions/test.functions";

const FunctionsRegistry = {
  readTestData: testFunctions.readTestData,
  readTestDataAll: testFunctions.readTestDataAll,
  createTestData: testFunctions.createTestData,
  updateTestData: testFunctions.updateTestData,
  deleteTestData: testFunctions.deleteTestData,
};

export default FunctionsRegistry;
