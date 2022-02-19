(function (exports) {
  const { displayResults, counterStart, counterStop } = app.helpers;
  
  function wait5sec() {

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('wait finished');
        resolve(true);
      }, 5000);
    });
  
  }
  
  async function callAPI (i) {
    await wait5sec();  // wait function

    const res = await fetch(`https://dev-bay.com/examples/php-api-js-wait/orders/${i}`);

    return res.json();
  }
  
  async function runLoop() {

    for (let i = 1; i < 4; i++) {
      const result = await callAPI(i);
      displayResults(JSON.stringify(result));
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