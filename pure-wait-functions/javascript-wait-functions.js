/** *
* WAIT 5 SEC - BASIC EXAMPLE
* ES2015+ SOLUTION FOR MODERN BROWSERS (NOT IE11)
* **/

async function runWait5sec () { // REMEMBER - ALL FUNCTIONS WITH wait5sec FUNCTION MUST BE ASYNC/AWAIT
	const initValue = 10;
	const result = await sum(initValue, 10);
}

async function sum (value, addValue) {
	await wait5sec(5000);  // wait function - 5000 ms

	return value + addValue;
}

function wait5sec (waitTime) {

	return new Promise ((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, waitTime);
	});
	
}

/** *
* WAIT IN FOR LOOP
* ES2015+ SOLUTION FOR MODERN BROWSERS (NOT IE11)
* **/

async function runLoop() { // REMEMBER - ALL FUNCTIONS WITH wait5sec FUNCTION MUST BE ASYNC/AWAIT
	const initValue = 10;

	for (let i = 0; i < 3; i++) {
		const result = await sum(initValue, 10 * (i + 1));
	}
}

async function sum (value, addValue) {
	await wait5sec(5000); // wait function - 5000 ms

	return value + addValue;
}


function wait5sec (waitTime) { // PUT THIS METHOD IN FUNCTION (ASYNC/AWAIT) WHERE YOU WANT TO HAVE A DELAY IN YOUR CODE

	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('wait finished');
			resolve(true);
		}, waitTime);
	});

}

/** *
* RECURENT LOOP
* ES5 SOLUTION FOR OLD BROWSERS, LIKE IE11
* **/

function runRecurentLoop() { // start recurent loop here
	var initValue = 10;
	var result = 0;


	recurentLoopFunc(3, 5000, 0, function (i) { // callback function will be triggered after WAIT time
		result = initValue + 10 * (i + 1);
	});
}

function recurentLoopFunc (count, timeoutTime, seqCounter, callback) {
  
	if (seqCounter < count) {

		setTimeout(() => {
			callback(seqCounter); // callback is triggered here
			seqCounter++;
			recurentLoopFunc(count, timeoutTime, seqCounter, callback); // again invode recurent function here with the same params, but increased seqCounter param

			if (seqCounter === count) {
				// RECURENT LOOP FINISH
			}
		}, timeoutTime);
		
	}
}