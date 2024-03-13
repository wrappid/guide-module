import * as testValidations from "./validations/test.validation";

const validationsRegistry = {
  getTestAll: testValidations.getTestAll,
  getTest: testValidations.getTest,
};
export default validationsRegistry;
