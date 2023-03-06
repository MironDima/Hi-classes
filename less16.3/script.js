const selectCountry = document.getElementById('country')
const selectCity = document.getElementById('city')
const result = document.querySelector('.result')

const cityArr = {
	rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
	uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
	bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
	jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

selectCountry.addEventListener('change', (event) => {
	selectCity.innerHTML = ''
	selectCity.style.display = 'inline-block'
	cityArr[event.target.value].forEach(item => {
		let options = document.createElement('option')
		let coutryOptions = selectCountry.options[selectCountry.options.selectedIndex].textContent
		options.textContent = item
		selectCity.append(options)
	})
})

selectCity.addEventListener('change', () => {
	let coutryOptions = selectCountry.options[selectCountry.options.selectedIndex].textContent
	result.textContent = `${coutryOptions} ${selectCity.value}`
})


console.log(selectCountry);
