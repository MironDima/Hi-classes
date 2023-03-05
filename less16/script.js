class First {
	hello() {
		console.log('Привет я метод родителя!');
	}
}

class Second extends First {
	hello() {
		super.hello()
		setTimeout(() =>{
			console.log('А я наследуемый метод');
		},1000)
		
	}
}

const methodSecond = new Second()

methodSecond.hello()


