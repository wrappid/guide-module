const testFunctions = require("../functions/test.functions");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.testGetAllFunc = async (req, res) => {
  try {
    let data = await testFunctions.readTestDataAll(req);

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
module.exports.testGetFunc = async (req, res) => {
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
module.exports.testPostFunc = async (req, res) => {
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
module.exports.testPutFunc = async (req, res) => {
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
module.exports.testPatchFunc = async (req, res) => {
  try {
    let data = await testFunctions.deleteTestData(req);

    return res.status(200).json({ data, message: "Deleted(^_^)" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error, message: "Something went wrong." });
  }
};