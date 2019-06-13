// НАЖАТИЕ НА БУРГЕР МЕНЮ
let burger = document.querySelector('.fas'),
	nav = document.querySelector('nav'),
	header = document.querySelector('header');
document.addEventListener('click', el => {
	let target = el.target;

	if (target === burger) {
		nav.classList.add('active');
		header.style.height = '100vh';
	} else if (nav.classList.contains('active')){
		nav.classList.remove('active');
		header.style.height = '115px';
	}
	console.log(target);
});

