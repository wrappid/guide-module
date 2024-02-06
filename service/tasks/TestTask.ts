<<<<<<< HEAD:service/tasks/TestTask.js
module.exports = {
  handleError: () => {},
  perform    : () => {
    console.log(
      `Test task is running in every minute @ ${new Date()}`
    );
=======
export const TestTask = {
  prePerform: () => {
    console.log(`Test Task is initated @ ${new Date()}`);
    return true;
  },
  perform: () => {
    console.log(`Test task is running in every minute @ ${new Date()}`);
>>>>>>> template/development:service/tasks/TestTask.ts
  },
  postPerform: () => {
    console.log(`Test Task is completed @ ${new Date()}`);
    console.log("<---------------------------------------------------------->");
  },
<<<<<<< HEAD:service/tasks/TestTask.js
  prePerform: () => {
    console.log(`Test Task is initated @ ${new Date()}`);
    return true;
  },
};
=======
  handleError: () => {},
};
>>>>>>> template/development:service/tasks/TestTask.ts
