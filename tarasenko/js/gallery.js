'use strict';
let category = [
	{
		id : 'all',
		name : 'All'
	},
	{
		id : 'city',
		name : 'City'
	},
	{
		id : 'images',
		name : 'Images'
	},
	{
		id : 'fentesy',
		name : 'fentesy'
	},
	{
		id : 'cars',
		name : 'Cars'
	},
	{
		id : 'logos',
		name : 'Logos'
	},
	{
		id : 'nature',
		name : 'Nature'
	},
	{
		id : 'builder',
		name : 'Builder'
	}
]
let items = [
	{
		name: "Images",
		category: "images",
		avilability: "in stock",
		image: "0.jpg"
	},
	{
		name: "Nature",
		category: "nature",
		avilability: "in stock",
		image: "1.png"
	},
	{
		name: "City",
		category: "city",
		avilability: "in stock",
		image: "2.jpg"
	},
	{
		name: "City",
		category: "city",
		avilability:"in stock",
		image: "3.jpg"
	},
	{
		name: "Cars",
		category: "cars",
		avilability: "in stock",
		image: "4.jpg"
	},
	{
		name: "Fentesy",
		category: "fentesy",
		avilability: "in stock",
		image: "5.jpg"
	},
	{
		name: "Fentesy",
		category: "fentesy",
		avilability: "in stock",
		image: "6.jpg"
	},
	{
		name: "Logos",
		category: "logos",
		avilability: "in stock",
		image: "7.jpg"
	},
	{
		name: "Nature",
		category: "nature",
		avilability: "in stock",
		image: "8.jpg"
	},
	{
		name: "Nature",
		category: "nature",
		avilability: "in stock",
		image: "9.jpg"
	},
	{
		name: "Builder",
		category: "builder",
		avilability: "in stock",
		image: "10.jpg"
	},
	{
		name: "Cars",
		category: "cars",
		avilability: "in stock",
		image: "11.jpg"
	},
	{
		name: "Fentesy",
		category: "fentesy",
		avilability: "in stock",
		image: "12.jpg"
	},
	{
		name: "Logos",
		category: "logos",
		avilability: "in stock",
		image: "13.jpg"
	},
	{
		name: "Logos",
		category: "logos",
		avilability: "in stock",
		image: "14.png"
	}
]

const Gallery = () => {
	
	let images = document.querySelector('.gallery');

	for(let i = 0; i < items.length; i++) {
		let item = document.createElement('div');
			item.className = 'item';
			images.appendChild(item);
			item.classList.add('all');
			item.classList.add(items[i].category);
		let h2 = document.createElement('h2');
			h2.innerText = items[i].name;
			h2.style.display = 'none';
			item.appendChild(h2);
		let p = document.createElement('p');
			p.innerText = 'Availability : ';
			p.style.display = 'none';
			item.appendChild(p);
		let span = document.createElement('span');
			span.innerText = items[i].avilability;
			span.style.display = 'none';
			item.appendChild(span);
		let img = document.createElement('img');
			img.src = `img/gallery/${items[i].image}`;
			item.appendChild(img);



		item.addEventListener('mouseover',  el => {
			h2.style.display = 'block';
			p.style.display = 'block';
			span.style.display = 'block';
		})

		item.addEventListener('mouseout',  el => {
			h2.style.display = 'none';
			p.style.display = 'none';
			span.style.display = 'none';
		})
	}
	let categoryBlock = document.querySelector('.category');
	for (let i = 0; i < category.length; i++ ) {
		let btn = document.createElement('button');
			btn.id = category[i].id;
			btn.innerText = category[i].name;
			categoryBlock.appendChild(btn);
	
		btn.addEventListener('click', el => {
			let target = el.target.id;

			for (let j = 0; j < items.length;  j++) {
				let item = images.querySelectorAll('div');
				
				if (target === items[j].category){
					item[j].style.display = 'block';
					console.log()
				}else if(target === 'all') {
						item[j].style.display = 'block';
						console.log()
				}else {
					item[j].style.display = 'none';
				}
			}

		})
	}

}



Gallery()