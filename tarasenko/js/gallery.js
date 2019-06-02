'use strict';
let category = [
	{
		id : 'all',
		name : 'All'
	},
	{
		id : 'stil-life',
		name : 'Stil Life'
	},
	{
		id : 'nude',
		name : 'Nude'
	}
]
let items = [
	{
		name: "My favourite breakfast",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x40",
		image: "stil-life/35.jpg",
		bigImage: "stil-life/big/35.jpg"
	},
	{
		name: "Lilac",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "90x60",
		image: "stil-life/84.jpg",
		bigImage: "stil-life/big/84.jpg"
	},
	{
		name: "...and Apple",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "71x52",
		image: "stil-life/86.jpg",
		bigImage: "stil-life/big/86.jpg"
	},
	{
		name: "Summer with friends",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "41x60",
		image: "stil-life/94.jpg",
		bigImage: "stil-life/big/94.jpg"
	},
	{
		name: "Classic\)\)",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x85",
		image: "stil-life/114.jpg",
		bigImage: "stil-life/big/114.jpg"
	},
	{
		name: "...and bird oil",
		category: "stil-life",
		avilability: "in stock",
		type: "Acrylic on canvas",
		size: "80x70",
		image: "stil-life/167.jpg",
		bigImage: "stil-life/big/167.jpg"
	},
	{
		name: "More love",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "70x75",
		image: "stil-life/169.jpg",
		bigImage: "stil-life/big/169.jpg"
	},
	{
		name: "More love 2",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil, acrylic on canvas",
		size: "85x60",
		image: "stil-life/171.jpg",
		bigImage: "stil-life/big/171.jpg"
	},
	{
		name: "2014",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "70x55",
		image: "stil-life/173.jpg",
		bigImage: "stil-life/big/173.jpg"
	},
	{
		name: "Red Wine",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x70",
		image: "stil-life/179.jpg",
		bigImage: "stil-life/big/179.jpg"
	},
	{
		name: "In summer",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "75x70",
		image: "stil-life/210.jpg",
		bigImage: "stil-life/big/210.jpg"
	},
	{
		name: "Gift from Germany",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x70",
		image: "stil-life/247.jpg",
		bigImage: "stil-life/big/247.jpg"
	},
	{
		name: "Expression",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "70x100",
		image: "nude/41.jpg",
		bigImage: "nude/big/41.jpg"
	},
	{
		name: "Two",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "60x90",
		image: "nude/62.jpg",
		bigImage: "nude/big/62.jpg"
	},
	{
		name: "Water",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x60",
		image: "nude/95.jpg",
		bigImage: "nude/big/95.jpg"
	},
	{
		name: "Ginger",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "85x65",
		image: "nude/101.jpg",
		bigImage: "nude/big/101.jpg"
	},
	{
		name: "Sonnet",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "80x110",
		image: "nude/110.jpg",
		bigImage: "nude/big/110.jpg"
	},
	{
		name: "By the sea",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "124x61",
		image: "nude/118.jpg",
		bigImage: "nude/big/118.jpg"
	},
	{
		name: "Specular captivity\(diptych\)",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x110",
		image: "nude/139.jpg",
		bigImage: "nude/big/139.jpg"
	},
	{
		name: "Specular captivity\(diptych\)",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x110",
		image: "nude/140.jpg",
		bigImage: "nude/big/140.jpg"
	},
	{
		name: "The solitude",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "110x70",
		image: "nude/141.jpg",
		bigImage: "nude/big/141.jpg"
	},
	{
		name: "Between heaven and earth",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "70x100",
		image: "nude/142.jpg",
		bigImage: "nude/big/142.jpg"
	},
	{
		name: "Thistle flavour",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x150",
		image: "nude/148.jpg",
		bigImage: "nude/big/148.jpg"
	},
	{
		name: "S102",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x100",
		image: "nude/157.jpg",
		bigImage: "nude/big/157.jpg"
	},
	{
		name: "Behold",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x90",
		image: "nude/165.jpg",
		bigImage: "nude/big/165.jpg"
	},
	{
		name: "Nude",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "110x65",
		image: "nude/166.jpg",
		bigImage: "nude/big/166.jpg"
	},
	{
		name: "Expression",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x60",
		image: "nude/172.jpg",
		bigImage: "nude/big/172.jpg"
	},
	{
		name: "She \(diptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, graphite on canvas",
		size: "70x100",
		image: "nude/132a.jpg",
		bigImage: "nude/big/132a.jpg"
	},
	{
		name: "He \(diptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, graphite on canvas",
		size: "70x100",
		image: "nude/133.jpg",
		bigImage: "nude/big/133.jpg"
	}


]

const Gallery = () => {



	let gallery = document.querySelector('.gallery');
	
	
	
	for(let i = 0; i < items.length; i++) {
		
		// Создание  самой галереи  в  и блоков  с картинками и текста
		let item = document.createElement('div');
			item.className = 'item';
			item.classList.add('all');
			item.classList.add(items[i].category);
			gallery.appendChild(item);

		let info = document.createElement('div');
			info.className = 'info';
			item.appendChild(info);

		let h2 = document.createElement('h2');
			h2.innerText = items[i].name;
			info.appendChild(h2);

		let div = ['avilability', 'type', 'size'];

		for (let j = 0; j < div.length; j++) {
			
			let item = document.createElement('div');
				item.id = div[j];
				info.appendChild(item)
			let p = document.createElement('p');
				item.appendChild(p);		
			let span = document.createElement('span');
				item.appendChild(span);		
		}
		
		info.querySelector('#avilability').querySelector('p').innerText = 'Avilability :';
		info.querySelector('#type').querySelector('p').innerText = 'Type :';
		info.querySelector('#size').querySelector('p').innerText = 'Size :';
		info.querySelector('#avilability').querySelector('span').innerText = items[i].avilability;
		info.querySelector('#type').querySelector('span').innerText = items[i].type;
		info.querySelector('#size').querySelector('span').innerText = items[i].size;
		
		let img = document.createElement('img');
			item.appendChild(img);
			img.src = `img/gallery/${items[i].image}`;
			
			
		// При наведении мышки  затемнение и вывод  текста
					
		item.addEventListener('mouseover',  el => {
			info.style.display = 'block';
			img.style.opacity = 0.1;
		});
		
		item.addEventListener('mouseout',  el => {
			info.style.display = 'none';
			img.style.opacity = 1;
		});

		// Нажатие на картинку или айтем

		item.addEventListener('click', el => {
			let modal = document.querySelector('.modal');
			console.log(modal);
		});


	}

	//Создание Кнопки категорий и подставление текста  из JSON
	for (let i = 0; i < category.length; i++ ) {
		let categoryBlock = document.querySelector('.category');

		let btn = document.createElement('button');
			btn.id = category[i].id;
			btn.innerText = category[i].name;
			categoryBlock.appendChild(btn);
	
		btn.addEventListener('click', el => {
			let target = el.target.id;

			for (let j = 0; j < items.length;  j++) {
				let item = gallery.querySelectorAll('.item');
					item[j].style.display = 'none';
				
				if (target === items[j].category){
					item[j].style.display = 'block';
				}else if(target === 'all') {
					item[j].style.display = 'block';
				}else {
					item[j].style.display = 'none';
				}
			}
		});
	}


}



Gallery()