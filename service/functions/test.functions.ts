import { databaseActions } from "@wrappid/service-core";

/**
 * @returns
 */
const readTestDataAll = async () => {
  try {
    const result = await databaseActions.findAll("application", "TestDatas");
    return result;
  } catch (error: any) {
    console.log(error);
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
    const result = await databaseActions.findOne("application", "TestDatas", {
      where: { id: req.params.id },
    });
    return result;
  } catch (error: any) {
    console.log(error);
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
    const data = await databaseActions.create("application", "TestDatas", {
      name: req.body.data,
    });
    return data;
  } catch (error: any) {
    console.log(error);
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
    await databaseActions.update(
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
    console.log(error);
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
    const data = await databaseActions.delete("application", "TestDatas", {
      where: {
        id: req.params.id,
      },
    });
    return data;
  } catch (error: any) {
    console.log(error);
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