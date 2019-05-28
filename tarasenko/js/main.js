let slider = document.querySelector('.slider');
let img = slider.querySelectorAll('img');

let el = 0;
const Slider = () => {
	for (let i = 0; i < img.length; i++) {
		img[i].style.display = 'none';
	}
	el++;

	if(el >= img.length) {
		el = 0;
	}
	img[el].style.display = 'block';	
}

setInterval(Slider, 10000);
