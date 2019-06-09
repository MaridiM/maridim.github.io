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

// НАЖАТИЕ НА БУРГЕР МЕНЮ
let burger = document.querySelector('.fas'),
	nav = document.querySelector('nav'),
	header = document.querySelector('header');
document.addEventListener('click', el => {
	let target = el.target;

	if (target === burger) {
		nav.classList.add('active');
		header.style.height = '100vh';
	} else {
		nav.classList.remove('active');
		header.style.height = '80px';
	}

	console.log(target);
});

