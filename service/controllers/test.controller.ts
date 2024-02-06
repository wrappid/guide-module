import * as testFunctions from "../functions/test.functions";

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const testGetAllFunc = async (req: any, res: any) => {
  try {
<<<<<<< HEAD:service/controllers/test.controller.js
    let data = await testFunctions.readTestDataAll(req);

    return res.status(200).json({ data, message: "Response Data(•_•) :" });
=======
    let data: any = await testFunctions.readTestDataAll();
    return res.status(200).json({
      message: "Response Data(•_•) :",
      data,
    });
>>>>>>> template/development:service/controllers/test.controller.ts
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "Something went wrong." });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const testGetFunc = async (req: any, res: any) => {
  try {
    let data = await testFunctions.readTestData(req);

    return res.status(200).json({ data, message: "Response Data(•_•) :" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "Something went wrong." });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const testPostFunc = async (req: any, res: any) => {
  try {
    let data = await testFunctions.createTestData(req);

    return res.status(200).json({ data, message: "Data is inserted (•_•) " });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "Something went wrong." });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const testPutFunc = async (req: any, res: any) => {
  try {
    console.log("::---", req.params, "---::");
    let data = await testFunctions.updateTestData(req);

    return res.status(200).json({ data, message: "Data updated (•_•)." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "Something went wrong." });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const testPatchFunc = async (req: any, res: any) => {
  try {
    let data = await testFunctions.deleteTestData(req);

    return res.status(200).json({ data, message: "Deleted(^_^)" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "Something went wrong." });
  }
};

export {
  testGetAllFunc,
  testGetFunc,
  testPostFunc,
  testPutFunc,
  testPatchFunc,
};