const list = document.querySelectorAll('.list');
function activeLink() {
	list.forEach(item => item.classList.remove('active'));
	this.classList.add('active');
}

list.forEach(item => item.addEventListener('click', activeLink));

const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');

btn.addEventListener('click', calcBMI);
btn2.addEventListener('click', calcFuel);

function calcBMI() {
	let weight = parseInt(document.querySelector('#weight').value);
	let height = parseInt(document.querySelector('#height').value);

	if (height === '' || isNaN(height))
		result.innerHTML = 'Wprowadź swoją wysokość';
	else if (weight === '' || isNaN(weight))
		result.innerHTML = 'Wprowadź swoją wagę';
	else {
		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height) / 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML = `Niedowaga : <span>${bmi}</span>`;
		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML = `W normie : <span>${bmi}</span>`;
		else result.innerHTML = `Nadwaga : <span>${bmi}</span>`;
	}
}

function calcFuel() {
	let dystans = parseInt(document.querySelector('#dystans').value);
	let spalanie = parseInt(document.querySelector('#spalanie').value);
	let cena = parseInt(document.querySelector('#cena').value);
	let osoby = parseInt(document.querySelector('#osoby').value);

	let paliwo = (dystans / 100) * spalanie;

	const wynik = paliwo * cena;

	if (dystans === '' || isNaN(dystans)) {
		result2.innerHTML = 'Wprowadź przejechany dystans';
	} else if (spalanie === '' || isNaN(spalanie)) {
		result2.innerHTML = 'Wprowadź średnie spalanie';
	} else if (cena === '' || isNaN(cena)) {
		result2.innerHTML = 'Wprowadź cenę';
	} else {
		result2.innerHTML = `Potrzebne/zużyte paliwo: ${paliwo} l </br> Koszt paliwa: ${wynik} zł`;

		if (osoby === '' || isNaN(osoby)) {
		} else {
			sztuka = wynik / osoby;
			result2.innerHTML = `Potrzebne/zużyte paliwo: ${paliwo} l </br> Koszt na jedną osobę: ${sztuka} zł`;
		}
	}
}
