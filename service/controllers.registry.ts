import * as testController from "./controllers/test.controller";

const controllersRegistry = {
  testGetAllFunc: [testController.testGetAllFunc],
  testGetFunc: [testController.testGetFunc],
  testPostFunc: [testController.testPostFunc],
  testPutFunc: [testController.testPutFunc],
  testPatchFunc: [testController.testPatchFunc],
};
export default controllersRegistry;
