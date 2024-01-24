module.exports = {
  handleError: () => {},
  perform    : () => {
    console.log(
      `Test task is running in every minute @ ${new Date()}`
    );
  },
  postPerform: () => {
    console.log(`Test Task is completed @ ${new Date()}`);
    console.log("<---------------------------------------------------------->");
  },
  prePerform: () => {
    console.log(`Test Task is initated @ ${new Date()}`);
    return true;
  },
};
