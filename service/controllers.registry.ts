import * as testController from "./controllers/test.controller";

export const controllersRegistry = {
  testGetAllFunc: testController.testGetAllFunc,
  testGetFunc: testController.testGetFunc,
  testPostFunc: testController.testPostFunc,
  testPutFunc: testController.testPutFunc,
  testPatchFunc: testController.testPatchFunc,
};
