const RoutesRegistry = {
  testGetAllAPI: {
    name: "Test Get All API",
    url: "wrappidall",
    authRequired: false,
    entityRef: "testGetAllAPI",
    reqMethod: "get",
    controllerRef: "testGetAllFunc",
  },
  testGetAPI: {
    name: "Test Get  API",
    url: "wrappid/:id",
    authRequired: false,
    entityRef: "testGetAllAPI",
    reqMethod: "get",
    controllerRef: "testGetFunc",
  },
  testPostAPI: {
    name: "Test Get All API",
    url: "wrappid",
    authRequired: false,
    entityRef: "testGetAllAPI",
    reqMethod: "post",
    controllerRef: "testPostFunc",
  },
  testPutAPI: {
    name: "Test Get All API",
    url: "wrappid/:id",
    authRequired: false,
    entityRef: "testGetAllAPI",
    reqMethod: "put",
    controllerRef: "testPutFunc",
  },
  testPatchAPI: {
    name: "Test Get All API",
    url: "wrappid/:id",
    authRequired: false,
    entityRef: "testGetAllAPI",
    reqMethod: "patch",
    controllerRef: "testPatchFunc",
  },
};

export default RoutesRegistry;
