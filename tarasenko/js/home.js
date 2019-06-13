let slider = document.querySelector('.slider');
let desktop = document.querySelector('#desktop');
let mobile = document.querySelector('#mobile');
let img = slider.querySelectorAll('img');

let el = 0;
const Slider = () => {
	for (let i = 0; i < img.length; i++) {
		mobile.style.display = 'none';
		img[i].style.display = 'none';
	}
	el++;

	if(el >= img.length) {
		el = 0;
	}
	img[el].style.display = 'block';

	
}

setInterval(Slider, 5000);