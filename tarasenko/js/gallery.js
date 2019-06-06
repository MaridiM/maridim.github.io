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
		id: 0,
		name: "My favourite breakfast",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x40",
		image: "stil-life/35.jpg",
		bigImage: "stil-life/big/35.jpg"
	},
	{
		id: 1,
		name: "Lilac",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "90x60",
		image: "stil-life/84.jpg",
		bigImage: "stil-life/big/84.jpg"
	},
	{
		id: 2,
		name: "...and Apple",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "71x52",
		image: "stil-life/86.jpg",
		bigImage: "stil-life/big/86.jpg"
	},
	{
		id: 3,
		name: "Summer with friends",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "41x60",
		image: "stil-life/94.jpg",
		bigImage: "stil-life/big/94.jpg"
	},
	{
		id: 4,
		name: "Classic\)\)",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x85",
		image: "stil-life/114.jpg",
		bigImage: "stil-life/big/114.jpg"
	},
	{
		id: 5,
		name: "...and bird oil",
		category: "stil-life",
		avilability: "in stock",
		type: "Acrylic on canvas",
		size: "80x70",
		image: "stil-life/167.jpg",
		bigImage: "stil-life/big/167.jpg"
	},
	{
		id: 6,
		name: "More love",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "70x75",
		image: "stil-life/169.jpg",
		bigImage: "stil-life/big/169.jpg"
	},
	{
		id: 7,
		name: "More love 2",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil, acrylic on canvas",
		size: "85x60",
		image: "stil-life/171.jpg",
		bigImage: "stil-life/big/171.jpg"
	},
	{
		id: 8,
		name: "2014",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "70x55",
		image: "stil-life/173.jpg",
		bigImage: "stil-life/big/173.jpg"
	},
	{
		id: 9,
		name: "Red Wine",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x70",
		image: "stil-life/179.jpg",
		bigImage: "stil-life/big/179.jpg"
	},
	{
		id: 10,
		name: "In summer",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "75x70",
		image: "stil-life/210.jpg",
		bigImage: "stil-life/big/210.jpg"
	},
	{
		id: 11,
		name: "Gift from Germany",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x70",
		image: "stil-life/247.jpg",
		bigImage: "stil-life/big/247.jpg"
	},
	{
		id: 12,
		name: "Expression",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "70x100",
		image: "nude/41.jpg",
		bigImage: "nude/big/41.jpg"
	},
	{
		id: 13,
		name: "Two",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "60x90",
		image: "nude/62.jpg",
		bigImage: "nude/big/62.jpg"
	},
	{
		id: 14,
		name: "Water",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x60",
		image: "nude/95.jpg",
		bigImage: "nude/big/95.jpg"
	},
	{
		id: 15,
		name: "Ginger",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "85x65",
		image: "nude/101.jpg",
		bigImage: "nude/big/101.jpg"
	},
	{
		id: 16,
		name: "Sonnet",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "80x110",
		image: "nude/110.jpg",
		bigImage: "nude/big/110.jpg"
	},
	{
		id: 17,
		name: "By the sea",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "124x61",
		image: "nude/118.jpg",
		bigImage: "nude/big/118.jpg"
	},
	{
		id: 18,
		name: "Specular captivity\(diptych\)",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x110",
		image: "nude/139.jpg",
		bigImage: "nude/big/139.jpg"
	},
	{
		id: 19,
		name: "Specular captivity\(diptych\)",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x110",
		image: "nude/140.jpg",
		bigImage: "nude/big/140.jpg"
	},
	{
		id: 20,
		name: "The solitude",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "110x70",
		image: "nude/141.jpg",
		bigImage: "nude/big/141.jpg"
	},
	{
		id: 21,
		name: "Between heaven and earth",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "70x100",
		image: "nude/142.jpg",
		bigImage: "nude/big/142.jpg"
	},
	{
		id: 22,
		name: "Thistle flavour",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x150",
		image: "nude/148.jpg",
		bigImage: "nude/big/148.jpg"
	},
	{
		id: 23,
		name: "S102",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x100",
		image: "nude/157.jpg",
		bigImage: "nude/big/157.jpg"
	},
	{
		id: 24,
		name: "Behold",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x90",
		image: "nude/165.jpg",
		bigImage: "nude/big/165.jpg"
	},
	{
		id: 25,
		name: "Nude",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "110x65",
		image: "nude/166.jpg",
		bigImage: "nude/big/166.jpg"
	},
	{
		id: 26,
		name: "Expression",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x60",
		image: "nude/172.jpg",
		bigImage: "nude/big/172.jpg"
	},
	{
		id: 27,
		name: "She \(diptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, graphite on canvas",
		size: "70x100",
		image: "nude/132a.jpg",
		bigImage: "nude/big/132a.jpg"
	},
	{
		id: 28,
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
			img.className = items[i].category;
			img.id = items[i].id;
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
		
		item.addEventListener('click',  el => {
			console.log(11122143123)
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
Gallery();
