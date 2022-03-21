let projectBtn1 = document.getElementById('company-button');

// projectBtn1.addEventListener('click', function () {
// 	window.open('http://google.com', '_blank');
// });

let colorBtn1 = document.getElementById('palette1');
let colorBtn2 = document.getElementById('palette2');
let colorBtn3 = document.getElementById('palette3');
let projectButtons = document.getElementsByClassName('button project');
let project = document.getElementsByClassName('project');

let colorPalette1 = () => {
	document.body.style.setProperty('--color1', '#557b83');
	document.body.style.setProperty('--color2', '#2b3e42');
	document.body.style.setProperty('--overlaycolor', 'rgba(43, 62, 66, 0.521)');
	for (let i = 0; i < projectButtons.length; i++) {
		projectButtons[i].style.border = '1px solid white';
		projectButtons[i].style.color = 'white';
	}
	for (let i = 0; i < project.length; i++) {
		project[i].style.color = 'white';
	}
};
let colorPalette2 = () => {
	document.body.style.setProperty('--color1', '#E2D784');
	document.body.style.setProperty('--color2', '#05595B');
	document.body.style.setProperty('--overlaycolor', 'rgba(5, 89, 91, 0.521)');
	for (let i = 0; i < projectButtons.length; i++) {
		projectButtons[i].style.border = '1px solid black';
		projectButtons[i].style.color = 'black';
	}
	for (let i = 0; i < project.length; i++) {
		project[i].style.color = 'black';
	}
};

let colorPalette3 = () => {
	document.body.style.setProperty('--color1', '#DFD3C3');
	document.body.style.setProperty('--color2', '#596e79');
	document.body.style.setProperty('--overlaycolor', 'rgba(89, 110, 121, 0.521))');
	for (let i = 0; i < projectButtons.length; i++) {
		projectButtons[i].style.border = '1px solid black';
		projectButtons[i].style.color = 'black';
	}
	for (let i = 0; i < project.length; i++) {
		project[i].style.color = 'black';
	}
};

colorBtn1.addEventListener('click', colorPalette1);
colorBtn2.addEventListener('click', colorPalette2);
colorBtn3.addEventListener('click', colorPalette3);

let date = new Date();

let clock = () => {
	clock = setInterval(() => {
		let date = new Date();

		document.getElementById('time').innerHTML = `Time is ${String(
			date.getHours()
		).padStart(2, '0')}:${String(date.getMinutes()).padStart(
			2,
			'0'
		)}:${String(date.getSeconds()).padStart(2, '0')}`;
	}, 1000);
};

clock();
