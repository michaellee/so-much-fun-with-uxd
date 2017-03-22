'use strict'

function remoteMathService (cb) {
	var  one
 	var  two
	callOneService(function (err, num1) {
		callTwoService(function (err, num2) {
			one = num1
			two = num2
			return cb(undefined, one  +  two)
		})
	})
}

function callOneService (cb) {
	setTimeout (function () {
 		return cb(undefined, 1)
	}, 1000)
}

function callTwoService (cb) {
	setTimeout (function () {
 		return cb(undefined, 2)
	}, 1500)
}

remoteMathService(function (err, answer) {
	if (err)
		console.log ("error", err)
	if (answer  !==  3 ) {
		console.log ("wrong answer", answer)
	} else {
		console.log ("correct")
	}
});
