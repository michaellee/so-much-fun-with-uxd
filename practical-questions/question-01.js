'use strict'

// doThing() defined elsewhere

function foo (callback) {
	doThing(function (err, res) {
		if (err) {
			callback(err)
		} else {
			callback(null, res)
		}
	});
}

foo(function (err, res){
 console.log ( 'Done!. err=', err, ' : res = ', res )
})

let test = () => {
	foo((err, res) => {
		let error = []
		let count = 0
		if (typeof err === 'undefined') {
			count += 1
			error.push('err')
		}

		if (typeof res === 'undefined') {
			count += 1
			error.push('res')
		}

		if (count > 0) {
			console.log(`foo should've returned at least a single value: ${count} values had errors in ${error.join(', ')}`)
		}
	})
}
