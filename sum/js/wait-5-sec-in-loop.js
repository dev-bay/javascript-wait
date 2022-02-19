(function (exports) {
  const { displayResults, counterStart, counterStop } = app.helpers;
  
  function wait5sec (waitTime) {

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('wait finished');
        resolve(true);
      }, waitTime);
    });
  
  }
  
  async function sum (value, addValue) {
    await wait5sec(5000); // wait function - 5000 ms

    return value + addValue;
  }
  
  async function runLoop() {
    const initValue = 10;
    displayResults(initValue);

    for (let i = 0; i < 3; i++) {
      const result = await sum(initValue, 10 * (i + 1));
      displayResults(result);
    }
  }

  async function runWait5secInForLoop () {
    counterStart();
    await runLoop();
    counterStop();
  }

  exports.app = exports.app || {};
  exports.app.runWait5secInForLoop = runWait5secInForLoop;

}(this));