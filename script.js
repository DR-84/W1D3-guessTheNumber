let name = prompt('Welkom! Wat is je naam?');
while (name === null || name.length === 0) {
	alert('Geen naam ingevuld.');
	name = prompt('Welkom! Wat is je naam?');
}
alert('Hey ' + name + '!');
for (i = 5; i > 0; i--) {
	let guessString = prompt(
		'Voer een nummer in van 0 tot 25 om te beginnen met raden...'
	);
	let guessNumber = parseInt(guessString);
	const randomNumber = Math.floor(Math.random() * 24 + 1);
	while (guessString === null || guessString.length === 0) {
		alert('Geen nummer ingevuld.');
		guessString = prompt(
			'Voer een nummer in van 0 tot 25 om te beginnen met raden...'
		);
	}
	if (guessNumber === randomNumber) {
		window.alert(guessNumber + ' is correct!! jij wint!!');
		{
			break;
		}
	} else {
		alert('Helaas pindakaas, je hebt nog ' + i + ' kansen!');
	}
}
alert('Tot Ziens !!');
