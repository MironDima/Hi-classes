const inputNumberOne = document.getElementById('a')
const inputNumberTwo = document.getElementById('b')

const sumBtn = document.getElementById('sum')
const multBtn = document.getElementById('mult')

const inputRes = document.getElementById('res')
let sumnum
let multnum


const calculator = {
	
	sum: function () {
		sumnum = +inputNumberOne.value + +inputNumberTwo.value
		console.log(sumnum);
		return sumnum
	},

	mult: function () {
		multnum = +inputNumberOne.value * +inputNumberTwo.value
		console.log(multnum);
		return multnum
	},

	show: function () {
		sumBtn.addEventListener('click', () => {
			this.sum()
			inputRes.value = sumnum
			})

		multBtn.addEventListener('click', () => {
			this.mult()
			inputRes.value = multnum
			})
	},

}
calculator.show()