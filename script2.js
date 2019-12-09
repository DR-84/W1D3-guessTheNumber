let name = prompt('Welkom! Wat is je naam?');
while (name === null || name.length === 0) {
	alert('Geen naam ingevuld.');
	name = prompt('Welkom! Wat is je naam?');
}
alert('Hey ' + name + '!');
let numberString1 = prompt(
	'we beginnen met een begin cijfer typ maar een getal. maakt niet uit wat'
);
let numberChoice1 = parseInt(numberString1);
while (numberString1 === null || numberString1.length === 0) {
	alert('Geen nummer ingevuld, probeer het nog eens.');
	numberString1 = prompt(
		'we beginnen met een begin cijfer typ maar iets. maakt niet uit wat'
	);
}
let numberString2 = prompt(
	'Nu nog een eindcijfer. Je moet straks proberen eem willerkeurig getal tussen je begin en eindcijfer te raden je kan het zo gek maken als je zelf wil. ik zal wel wat hints geven :)'
);
let numberChoice2 = parseInt(numberString2);
while (numberString2 === null || numberString2.length === 0) {
	alert('Geen nummer ingevuld, probeer het nog eens.');
	numberString2 = prompt(
		'Nu nog een eindcijfer. Je moet straks proberen eem willerkeurig getal tussen je begin en eindcijfer te raden je kan het zo gek maken als je zelf wil. ik zal wel wat hints geven :)'
	);
}

for (i = 5; i > 0; i--) {
	let guessString = prompt(
		'Voer een nummer in tussen ' +
			numberChoice1 -
			1 +
			' tot ' +
			numberChoice2 +
			1 +
			' om te beginnen met raden...'
	);
	let counter = i;
	let guessNumber = parseInt(guessString);
	const randomNumber = Math.floor(
		Math.random() * (numberChoice2 - numberChoice1 + 1) + numberChoice1
	);

	while (guessString === null || guessString.length === 0) {
		alert('Geen nummer ingevuld.');
		guessString = prompt(
			'Voer een nummer in tussen ' +
				numberChoice1 -
				1 +
				' tot ' +
				numberChoice2 +
				1 +
				' om te beginnen met raden...'
		);
	}
	if (guessNumber === randomNumber) {
		window.alert(
			guessNumber +
				' is correct en je hebt het in ' +
				(-i + 6) +
				' keer geraden! jij wint!!'
		);
		{
			break;
		}
	} else if (guessNumber < randomNumber) {
		alert(
			'Helaas pindakaas, je hebt nog ' +
				i +
				' kansen! Het getal wat je zoekt is HOGER dan ' +
				guessNumber
		);
	} else guessNumber > randomNumber;
	alert(
		'Helaas pindakaas, je hebt nog ' +
			i +
			' kansen! Het getal wat je zoekt is LAGER dan ' +
			guessNumber
	);
}

alert('Tot Ziens !!');
