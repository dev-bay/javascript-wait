(function (exports) {

  function createTimestamp () {
    return Math.round((new Date()).getTime() / 1000);
  }

  function displayResults (results) {
    var str = `<div class="log"> Response: ${results} | Time: ${counting} sec</div>`;

    log(str);
  }

  function log (str) {
    console.log(str);
    document.querySelector("#logs").innerHTML += str;
  }

  function clearLog () {
    document.querySelector("#logs").innerHTML = '';
  }

  let counting = 0;
  let countingInterval = null;

  function counterStart () {
    var timeStart = createTimestamp();
    var el = document.getElementById('counter');

    el.innerText = createTimestamp() - timeStart;

    document.getElementById('finished').innerText = '';
    document.querySelector('.counter').style.display = 'block';
    document.querySelector('.info').style.display = 'block';

    countingInterval = setInterval(() => {
      el.innerText = createTimestamp() - timeStart;
      counting++;
    }, 1000);

  }

  function counterStop () {
    clearInterval(countingInterval);
    counting = 0;
    document.getElementById('finished').innerText = '- FINISHED';
  }

  function checkIfHasParentWindow () {
    if(window.parent.location.href !== 'https://dev-bay.com/javascript-wait-delay-functions/') {
      window.parent.location.href = 'https://dev-bay.com/javascript-wait-delay-functions/';
    }
  }

  function assignButtonEvents () {
    
    checkIfHasParentWindow();

    var btnExample1 = document.getElementById('run-wait');
    var btnExample2 = document.getElementById('run-wait-in-loop');
    var btnExample3 = document.getElementById('run-wait-in-recurent-function');

    if(btnExample1) {
      btnExample1.addEventListener('click', (e) => {
        e.preventDefault();
        clearLog();
        app.runWait5sec();
      });
    }

    if(btnExample2) {
      btnExample2.addEventListener('click', (e) => {
        e.preventDefault();
        clearLog();
        app.runWait5secInForLoop();
      });
    }

    if(btnExample3) {
      btnExample3.addEventListener('click', (e) => {
        e.preventDefault();
        clearLog();
        app.runWait5secInRecurentLoop();
      });
    }

  }

  exports.app = exports.app || {};
  exports.app.helpers = exports.app.helpers || {};
  exports.app.helpers.displayResults = displayResults;
  exports.app.helpers.assignButtonEvents = assignButtonEvents;
  exports.app.helpers.counterStart = counterStart;
  exports.app.helpers.counterStop = counterStop;

}(this));