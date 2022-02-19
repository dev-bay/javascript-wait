(function (exports) {
  const { displayResults, counterStart, counterStop } = app.helpers;

  function wait5sec (waitTime) {

    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, waitTime);
    });
    
  }

  async function sum (value, addValue) {
    await wait5sec(5000);  // wait function - 5000 ms

    return value + addValue;
  }

  async function runWait5sec () {
    counterStart();

    const initValue = 10;
    displayResults(initValue);

    const result = await sum(initValue, 10);
    displayResults(result);

    counterStop();
  }

  exports.app = exports.app || {};
  exports.app.runWait5sec = runWait5sec;

}(this));