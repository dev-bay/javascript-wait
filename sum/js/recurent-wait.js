(function (exports) {

  var counterStop = app.helpers.counterStop;
  var counterStart = app.helpers.counterStart;
  var displayResults = app.helpers.displayResults;
  
  function recurentLoopFunc (count, timeoutTime, seqCounter, callback) {
  
    if (seqCounter < count) {

      setTimeout(() => {
        callback(seqCounter);
        seqCounter++;
        recurentLoopFunc(count, timeoutTime, seqCounter, callback);

        if (seqCounter === count) {
          counterStop();
        }
      }, timeoutTime);
      
    }

  }

  async function runRecurentLoop() {
    var initValue = 10;
    var result = 0;

    displayResults(initValue);

    recurentLoopFunc(3, 5000, 0, function (i) {
      result = initValue + 10 * (i + 1);
      displayResults(result);
    });
  }

  function runWait5secInRecurentLoop (i) {
    counterStart();
    runRecurentLoop();
  }

  exports.app = exports.app || {};
  exports.app.runWait5secInRecurentLoop = runWait5secInRecurentLoop;

}(this));

