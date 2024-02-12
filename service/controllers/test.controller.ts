import * as testFunctions from "../functions/test.functions";

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const testGetAllFunc = async (req: any, res: any) => {
  try {
    const data: any = await testFunctions.readTestDataAll();
    return res.status(200).json({
      message: "Response Data(•_•) :",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
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
    const data = await testFunctions.readTestData(req);
    return res.status(200).json({ message: "Response Data(•_•) :", data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
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
    const data = await testFunctions.createTestData(req);
    return res.status(200).json({ message: "Data is inserted (•_•) ", data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
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
    const data = await testFunctions.updateTestData(req);
    return res.status(200).json({ message: "Data updated (•_•).", data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
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
    const data = await testFunctions.deleteTestData(req);
    return res.status(200).json({ message: "Deleted(^_^)", data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};

export {
  testGetAllFunc,
  testGetFunc,
  testPostFunc,
  testPutFunc,
  testPatchFunc,
};