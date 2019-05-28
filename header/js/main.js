'use strict';
document.addEventListener('click', el => {
	let search = document.querySelector('.search'),
		searchImg = search.querySelector('.search-img').className,
		searchForm = document.querySelector('.search-form'),
		target = el.target.className;

	if (searchImg === target) {
		searchForm.classList.add('open');
		search.style.display = 'none';
	} else if (!searchForm.contains(el.target)) {
		searchForm.classList.remove('open');
		search.style.display = 'block';
	}




	console.log(searchForm.contains(el.target));