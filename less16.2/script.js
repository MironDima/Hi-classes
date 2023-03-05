'use strict'
function getResult(x, y) {
	let result;
	if (y == 1) {
		return x
	}
	else {
		let mult = x ** y
		let array = String(mult).split('').map((num) => {
			return +num
		})
		console.log(array);
		result = array.reduce((accum, item) => accum + item);
		return result
	}
}
console.log(getResult(4, 8))
