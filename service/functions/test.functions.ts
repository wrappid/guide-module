import { databaseActions } from "@wrappid/service-core";

/**
 * @returns
 */
const readTestDataAll = async () => {
  try {
    let result = await databaseActions.findAll("application", "TestDatas");
    return result;
  } catch (error: any) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
const readTestData = async (req: any) => {
  try {
    let result = await databaseActions.findOne("application", "TestDatas", {
      where: { id: req.params.id },
    });
    return result;
  } catch (error: any) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
const createTestData = async (req: any) => {
  try {
    let data = await databaseActions.create("application", "TestDatas", {
      name: req.body.data,
    });
    return data;
  } catch (error: any) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
const updateTestData = async (req: any) => {
  try {
    let result = await databaseActions.update(
      "application",
      "TestDatas",
      {
        name: { ...req.body },
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  } catch (error: any) {
    throw error;
  }
};

/**
 *
 * @param {*} req
 * @returns
 */
const deleteTestData = async (req: any) => {
  try {
    let data = await databaseActions.delete("application", "TestDatas", {
      where: {
        id: req.params.id,
      },
    });
    return data;
  } catch (error: any) {
    throw error;
  }
};

export {
  readTestDataAll,
  readTestData,
  createTestData,
  updateTestData,
  deleteTestData,
};