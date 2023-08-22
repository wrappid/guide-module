const express = require("express");

const testController = require("../controllers/test.controller");

const { getTestAll, getTest, postTest, putTest, patchTest } = require("../validations/test.validation");
const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const testMiddleware = require("../middlewares/test.middleware");

const testRouter = express.Router();

testRouter.get("/", testMiddleware, CoreMiddlewaresRegistry.validation(getTestAll), testController.testGetAllFunc);
testRouter.get("/:id", testMiddleware, CoreMiddlewaresRegistry.validation(getTest), testController.testGetFunc);
testRouter.post("/", testMiddleware, CoreMiddlewaresRegistry.validation(postTest), testController.testPostFunc);
testRouter.put("/:id/:name", testMiddleware, CoreMiddlewaresRegistry.validation(putTest), testController.testPutFunc);
testRouter.patch("/:id", testMiddleware, CoreMiddlewaresRegistry.validation(patchTest), testController.testPatchFunc);

module.exports = testRouter;
