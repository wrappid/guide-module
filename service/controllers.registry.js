const testController = require("./controllers/test.controller");

const ControllerssRegistry = {
    "testGetAllFunc": testController.testGetAllFunc,
    "testGetFunc": testController.testGetFunc,
    "testPostFunc": testController.testPostFunc,
    "testPutFunc": testController.testPutFunc,
    "testPatchFunc": testController.testPatchFunc,
};

module.exports = ControllerssRegistry;