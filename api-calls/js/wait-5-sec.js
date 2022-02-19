(function (exports) {
  const { displayResults, counterStart, counterStop } = app.helpers;

  function wait5sec () {

    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });
    
  }

  async function callAPI (i) {
    await wait5sec();  // wait function

    const res = await fetch(`https://dev-bay.com/examples/php-api-js-wait/orders/${i}`);

    return res.json();
  }

  async function runWait5sec () {
    counterStart();

    const result = await callAPI(1);
    
    displayResults(JSON.stringify(result));

    counterStop();
  }

  exports.app = exports.app || {};
  exports.app.runWait5sec = runWait5sec;

}(this));