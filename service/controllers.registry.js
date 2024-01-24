const testController = require("./controllers/test.controller");

const controllersRegistry = {
  "testGetAllFunc": testController.testGetAllFunc,
  "testGetFunc"   : testController.testGetFunc,
  "testPatchFunc" : testController.testPatchFunc,
  "testPostFunc"  : testController.testPostFunc,
  "testPutFunc"   : testController.testPutFunc,
};

exports.controllersRegistry = controllersRegistry;