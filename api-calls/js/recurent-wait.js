(function (exports) {

  var counterStop = app.helpers.counterStop;
  var counterStart = app.helpers.counterStart;
  var displayResults = app.helpers.displayResults;
  
  function recurentLoopFunc (count, timeoutTime, seqCounter, callback) {
  
    if (seqCounter < count) {

      setTimeout(() => {

        callback(seqCounter).then(function (response) {
          return response.json();
        }).then(function (result) {
          displayResults(JSON.stringify(result));
          seqCounter++;
          recurentLoopFunc(count, timeoutTime, seqCounter, callback);

          if (seqCounter === count) {
            counterStop();
          }
        });
        
      }, timeoutTime);
      
    }

  }

  function runWait5secInRecurentLoop (i) {
    counterStart();
    recurentLoopFunc(4, 5000, 1, function (i) {
      return fetch(`https://dev-bay.com/examples/php-api-js-wait/orders/${i}`);
    });
  }

  exports.app = exports.app || {};
  exports.app.runWait5secInRecurentLoop = runWait5secInRecurentLoop;

}(this));

