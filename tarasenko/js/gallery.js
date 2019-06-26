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
	},
	{
		id: 'portrait',
		name: 'Portrait'
	},
	{
		id: 'drawing',
		name: 'Drawing'
	},
	{
		id: 'figurative',
		name: 'Figurative'
	}
]
let items = [
	{
		id: 88,
		name: "Where are you my little prince?",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x70 cm",
		image: "portrait/245.jpg",
		bigImage: "portrait/big/245.jpg"
	},
	{
		id: 88,
		name: "Where are you my little prince?",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x50 cm",
		image: "portrait/227а.jpg",
		bigImage: "portrait/big/227а.jpg"
	},
	{
		id: 87,
		name: "Poems and expectations",
		category: "portrait",
		avilability: "Sold",
		type: "Oil, Paper, pastel on canvas",
		size: "100x55 cm",
		image: "portrait/163.jpg",
		bigImage: "portrait/big/163.jpg"
	},
	{
		id: 86,
		name: "Little Prince",
		category: "portrait",
		avilability: "in stock",
		type: "Oil, acrylic  on canvas",
		size: "100x70 cm",
		image: "portrait/237.jpg",
		bigImage: "portrait/big/237.jpg"
	},
	{
		id: 85,
		name: "Face to face",
		category: "figurative",
		avilability: "in stock",
		type: "Oil, acrylic  on canvas",
		size: "90x60 cm",
		image: "figurative/256.jpg",
		bigImage: "figurative/big/256.jpg"
	},
	{
		id: 84,
		name: "Geniuses draw \(Mattis\)",
		category: "figurative",
		avilability: "in stock",
		type: "Oil, acrylic  on canvas",
		size: "130x90 cm",
		image: "figurative/243.jpg",
		bigImage: "figurative/big/243.jpg"
	},
	{
		id: 83,
		name: "Blue jeans",
		category: "figurative",
		avilability: "in stock",
		type: "Oil, acrylic  on canvas",
		size: "110x100 cm",
		image: "figurative/221.jpg",
		bigImage: "figurative/big/221.jpg"
	},
	{
		id: 82,
		name: "The best friends",
		category: "figurative",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "95x55 cm",
		image: "figurative/178.jpg",
		bigImage: "figurative/big/178.jpg"
	},
	{
		id: 81,
		name: "Peter and his gift",
		category: "figurative",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x50 cm",
		image: "figurative/224.jpg",
		bigImage: "figurative/big/224.jpg"
	},
	{
		id: 80,
		name: "Paris I love you",
		category: "figurative",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "100x80 cm",
		image: "figurative/146.jpg",
		bigImage: "figurative/big/146.jpg"
	},
	{
		id: 79,
		name: "Alya",
		category: "drawing",
		avilability: "Sold",
		type: "Pencil on paper",
		size: "30x21 cm",
		image: "drawing/27.jpg",
		bigImage: "drawing/big/27.jpg"
	},
	{
		id: 78,
		name: "Profile",
		category: "drawing",
		avilability: "Sold",
		type: "Pencil on paper",
		size: "30x21 cm",
		image: "drawing/29.jpg",
		bigImage: "drawing/big/29.jpg"
	},
	{
		id: 77,
		name: "Pencil on paper",
		category: "drawing",
		avilability: "Sold",
		type: "Pencil on paper",
		size: "30х21 cm",
		image: "drawing/30.jpg",
		bigImage: "drawing/big/30.jpg"
	},
	{
		id: 76,
		name: "Sketch",
		category: "drawing",
		avilability: "Sold",
		type: "Ink,acrylic on stained cardboard",
		size: "30х21 cm",
		image: "drawing/30х21.jpg",
		bigImage: "drawing/big/30х21.jpg"
	},
	{
		id: 75,
		name: "Sketch",
		category: "drawing",
		avilability: "Sold",
		type: "Ink on stained cardboard",
		size: "30х23 cm",
		image: "drawing/30х23.jpg",
		bigImage: "drawing/big/30х23.jpg"
	},
	{
		id: 74,
		name: "Sketch",
		category: "drawing",
		avilability: "Sold",
		type: "Ink on stained cardboard",
		size: "30x24 cm",
		image: "drawing/IMG_3354.jpg",
		bigImage: "drawing/big/IMG_3354.jpg"
	},
	{
		id: 73,
		name: "Drawing",
		category: "drawing",
		avilability: "in stock",
		type: "Ink,acrylic on stained cardboard",
		size: "30x23 cm",
		image: "drawing/IMG_61800.jpg",
		bigImage: "drawing/big/IMG_61800.jpg"
	},
	{
		id: 72,
		name: "Ink on paper",
		category: "drawing",
		avilability: "in stock",
		type: "Ink on paper",
		size: "30x21 cm",
		image: "drawing/IMG_61890.jpg",
		bigImage: "drawing/big/IMG_61890.jpg"
	},
	{
		id: 71,
		name: "Sitting",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x70 cm",
		image: "nude/246.jpg",
		bigImage: "nude/big/246.jpg"
	},
	{
		id: 70,
		name: "Expression",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x75 cm",
		image: "nude/251.jpg",
		bigImage: "nude/big/251.jpg"
	},
	{
		id: 69,
		name: "New York",
		category: "portrait",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "95x75 cm",
		image: "portrait/95.jpg",
		bigImage: "portrait/big/95.jpg"
	},
	{
		id: 68,
		name: "Frida",
		category: "portrait",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "95x75 cm",
		image: "portrait/253а.jpg",
		bigImage: "portrait/big/253а.jpg"
	},
	{
		id: 67,
		name: "Relaxation",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "70x115 cm",
		image: "nude/203.jpg",
		bigImage: "nude/big/203.jpg"
	},
	{
		id: 66,
		name: "\(diptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "110x80 cm",
		image: "nude/eva.jpg",
		bigImage: "nude/big/eva.jpg"
	},
	{
		id: 65,
		name: "Fighting\(giptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "80x180 cm",
		image: "nude/borba1.jpg",
		bigImage: "nude/big/borba1.jpg"
	},
	{
		id: 64,
		name: "Solitude 2",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "95x70 cm",
		image: "nude/254.jpg",
		bigImage: "nude/big/254.jpg"
	},
	{
		id: 63,
		name: "Embrace",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "120x85 cm",
		image: "nude/249.jpg",
		bigImage: "nude/big/249.jpg"
	},
	{
		id: 62,
		name: "My childhood",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "75x110 cm",
		image: "nude/241а.jpg",
		bigImage: "nude/big/241а.jpg"
	},
	{
		id: 61,
		name: "Thirst for flight",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "110x80 cm",
		image: "nude/235.jpg",
		bigImage: "nude/big/235.jpg"
	},
	{
		id: 60,
		name: "I dream'd in a dream",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x80 cm",
		image: "nude/231.jpg",
		bigImage: "nude/big/231.jpg"
	},
	{
		id: 59,
		name: "The red",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "115x50 cm",
		image: "nude/229с.jpg",
		bigImage: "nude/big/229с.jpg"
	},
	{
		id: 58,
		name: "Black head",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "80x100 cm",
		image: "nude/218.jpg",
		bigImage: "nude/big/218.jpg"
	},
	{
		id: 57,
		name: "3D",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "50x100 cm",
		image: "nude/204.jpg",
		bigImage: "nude/big/204.jpg"
	},
	{
		id: 56,
		name: "Fighting",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "85x120 cm",
		image: "nude/202.jpg",
		bigImage: "nude/big/202.jpg"
	},
	{
		id: 55,
		name: "The tension",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "110x80 cm",
		image: "nude/201.jpg",
		bigImage: "nude/big/201.jpg"
	},
	{
		id: 54,
		name: "Two",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "60x90 cm",
		image: "nude/62.jpg",
		bigImage: "nude/big/62.jpg"
	},
	{
		id: 53,
		name: "Water",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x60 cm",
		image: "nude/95.jpg",
		bigImage: "nude/big/95.jpg"
	},
	{
		id: 52,
		name: "Ginger",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "85x65 cm",
		image: "nude/101.jpg",
		bigImage: "nude/big/101.jpg"
	},
	{
		id: 51,
		name: "Sonnet",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "80x110 cm",
		image: "nude/110.jpg",
		bigImage: "nude/big/110.jpg"
	},
	{
		id: 50,
		name: "By the sea",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "124x61 cm",
		image: "nude/118.jpg",
		bigImage: "nude/big/118.jpg"
	},
	{
		id: 49,
		name: "Specular captivity\(diptych\)",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x110 cm",
		image: "nude/139.jpg",
		bigImage: "nude/big/139.jpg"
	},
	{
		id: 48,
		name: "Specular captivity\(diptych\)",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x110 cm",
		image: "nude/140.jpg",
		bigImage: "nude/big/140.jpg"
	},
	{
		id: 47,
		name: "The solitude",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "110x70 cm",
		image: "nude/141.jpg",
		bigImage: "nude/big/141.jpg"
	},
	{
		id: 46,
		name: "Between heaven and earth",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "70x100 cm",
		image: "nude/142.jpg",
		bigImage: "nude/big/142.jpg"
	},
	{
		id: 45,
		name: "Thistle flavour",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x150 cm",
		image: "nude/148.jpg",
		bigImage: "nude/big/148.jpg"
	},
	{
		id: 44,
		name: "S102",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x100 cm",
		image: "nude/157.jpg",
		bigImage: "nude/big/157.jpg"
	},
	{
		id: 43,
		name: "Behold",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x90 cm",
		image: "nude/165.jpg",
		bigImage: "nude/big/165.jpg"
	},
	{
		id: 42,
		name: "Nude",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "110x65 cm",
		image: "nude/166.jpg",
		bigImage: "nude/big/166.jpg"
	},
	{
		id: 41,
		name: "Expression",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x60 cm",
		image: "nude/172.jpg",
		bigImage: "nude/big/172.jpg"
	},
	{
		id: 40,
		name: "She \(diptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, graphite on canvas",
		size: "70x100 cm",
		image: "nude/132a.jpg",
		bigImage: "nude/big/132a.jpg"
	},
	{
		id: 39,
		name: "He \(diptych\)",
		category: "nude",
		avilability: "in stock",
		type: "Oil, graphite on canvas",
		size: "70x100 cm",
		image: "nude/133.jpg",
		bigImage: "nude/big/133.jpg"
	},
	{
		id: 38,
		name: "Birdie",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x50 cm",
		image: "portrait/78.jpg",
		bigImage: "portrait/big/78.jpg"
	},
	{
		id: 37,
		name: "Dedicated to Fellini",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "92x70 cm",
		image: "portrait/125.jpg",
		bigImage: "portrait/big/125.jpg"
	},
	{
		id: 36,
		name: "Moonlight boy",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x55 cm",
		image: "portrait/145.jpg",
		bigImage: "portrait/big/145.jpg"
	},
	{
		id: 35,
		name: "My sweet greyhound",
		category: "portrait",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "100x50 cm",
		image: "portrait/208.jpg",
		bigImage: "portrait/big/208.jpg"
	},
	{
		id: 34,
		name: "Woody!",
		category: "portrait",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "95x70 cm",
		image: "portrait/219.jpg",
		bigImage: "portrait/big/219.jpg"
	},
	{
		id: 33,
		name: "Tany's glasses",
		category: "portrait",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "110x75 cm",
		image: "portrait/242.jpg",
		bigImage: "portrait/big/242.jpg"
	},
	{
		id: 32,
		name: "After the performance",
		category: "figurative",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x55 cm",
		image: "figurative/03.jpg",
		bigImage: "figurative/big/03.jpg"
	},
	{
		id: 31,
		name: "Winter holidays",
		category: "figurative",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x60 cm",
		image: "figurative/08.jpg",
		bigImage: "figurative/big/08.jpg"
	},
	{
		id: 30,
		name: "Self-portrait with a cat",
		category: "figurative",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "90х70 cm",
		image: "figurative/16.jpg",
		bigImage: "figurative/big/16.jpg"
	},
	{
		id: 29,
		name: "The boy in the forest",
		category: "figurative",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x60 cm",
		image: "figurative/22.jpg",
		bigImage: "figurative/big/22.jpg"
	},
	{
		id: 28,
		name: "My childhood",
		category: "figurative",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x65 cm",
		image: "figurative/33.jpg",
		bigImage: "figurative/big/33.jpg"
	},
	{
		id: 27,
		name: "Egyptian cats",
		category: "figurative",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "56x123 cm",
		image: "figurative/40.jpg",
		bigImage: "figurative/big/40.jpg"
	},
	{
		id: 26,
		name: "Friends",
		category: "figurative",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "110x90 cm",
		image: "figurative/48.jpg",
		bigImage: "figurative/big/48.jpg"
	},
	{
		id: 25,
		name: "Sight",
		category: "portrait",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "105x80 cm",
		image: "figurative/53.jpg",
		bigImage: "figurative/big/53.jpg"
	},
	{
		id: 24,
		name: "Alya",
		category: "portrait",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x60 cm",
		image: "portrait/21.jpg",
		bigImage: "portrait/big/21.jpg"
	},
	{
		id: 23,
		name: "Lefa",
		category: "portrait",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "70x40 cm",
		image: "portrait/Lefa.jpg",
		bigImage: "portrait/big/Lefa.jpg"
	},
	{
		id: 22,
		name: "Lefa 3/4",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x40 cm",
		image: "portrait/32.jpg",
		bigImage: "portrait/big/32.jpg"
	},
	{
		id: 21,
		name: "Evening",
		category: "portrait",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "80x60 cm",
		image: "portrait/46.jpg",
		bigImage: "portrait/big/46.jpg"
	},
	{
		id: 20,
		name: "Cat-dog",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "",
		image: "portrait/47.jpg",
		bigImage: "portrait/big/47.jpg"
	},
	{
		id: 19,
		name: "Ilja",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "90x60 cm",
		image: "portrait/49.jpg",
		bigImage: "portrait/big/49.jpg"
	},
	{
		id: 18,
		name: "My love",
		category: "portrait",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "85x50 cm",
		image: "portrait/71.jpg",
		bigImage: "portrait/big/71.jpg"
	},
	{
		id: 17,
		name: "The view ",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "90x60 cm",
		image: "nude/176.jpg",
		bigImage: "nude/big/176.jpg"
	},
	{
		id: 16,
		name: "The dreamer",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "80x110 cm",
		image: "nude/180a.jpg",
		bigImage: "nude/big/180a.jpg"
	},
	{
		id: 15,
		name: "G",
		category: "nude",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "110x65 cm",
		image: "nude/182.jpg",
		bigImage: "nude/big/182.jpg"
	},
	{
		id: 14,
		name: "His wings",
		category: "nude",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "100x80 cm",
		image: "nude/183-0.jpg",
		bigImage: "nude/big/183-0.jpg"
	},
	{
		id: 13,
		name: "Sight",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "110x80 cm",
		image: "nude/184.jpg",
		bigImage: "nude/big/184.jpg"
	},
	{
		id: 12,
		name: "Full moon",
		category: "nude",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x80 cm",
		image: "nude/190.jpg",
		bigImage: "nude/big/190.jpg"
	},
	{
		id: 11,
		name: "My favourite breakfast",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x40 cm",
		image: "stil-life/35.jpg",
		bigImage: "stil-life/big/35.jpg"
	},
	{
		id: 10,
		name: "Lilac",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x60 cm",
		image: "stil-life/84.jpg",
		bigImage: "stil-life/big/84.jpg"
	},
	{
		id: 9,
		name: "...and Apple",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "71x52 cm",
		image: "stil-life/86.jpg",
		bigImage: "stil-life/big/86.jpg"
	},
	{
		id: 8,
		name: "Summer with friends",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "41x60 cm",
		image: "stil-life/94.jpg",
		bigImage: "stil-life/big/94.jpg"
	},
	{
		id: 7,
		name: "Classic\)\)",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil on canvas",
		size: "60x85 cm",
		image: "stil-life/114.jpg",
		bigImage: "stil-life/big/114.jpg"
	},
	{
		id: 6,
		name: "...and bird oil",
		category: "stil-life",
		avilability: "Sold",
		type: "Acrylic on canvas",
		size: "80x70 cm",
		image: "stil-life/167.jpg",
		bigImage: "stil-life/big/167.jpg"
	},
	{
		id: 5,
		name: "More love",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "70x75 cm",
		image: "stil-life/169.jpg",
		bigImage: "stil-life/big/169.jpg"
	},
	{
		id: 4,
		name: "More love 2",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil, acrylic on canvas",
		size: "85x60 cm",
		image: "stil-life/171.jpg",
		bigImage: "stil-life/big/171.jpg"
	},
	{
		id: 3,
		name: "2014",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "70x55 cm",
		image: "stil-life/173.jpg",
		bigImage: "stil-life/big/173.jpg"
	},
	{
		id: 2,
		name: "Red Wine",
		category: "stil-life",
		avilability: "Sold",
		type: "Oil on canvas",
		size: "90x70 cm",
		image: "stil-life/179.jpg",
		bigImage: "stil-life/big/179.jpg"
	},
	{
		id: 1,
		name: "In summer",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "75x70 cm",
		image: "stil-life/210.jpg",
		bigImage: "stil-life/big/210.jpg"
	},
	{
		id: 0,
		name: "Gift from Germany",
		category: "stil-life",
		avilability: "in stock",
		type: "Oil, acrylic on canvas",
		size: "100x70 cm",
		image: "stil-life/255.jpg",
		bigImage: "stil-life/big/255.jpg"
	}
]

const Gallery = () => {
	let gallery = document.querySelector('.gallery');
	for (let i = 0; i < items.length; i++ )	{
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
		

		// Открытие  картинки  по нажатию на нее.

		let showImg = document.querySelector('.bigImg');
			showImg.style.display = 'none';
			console.log(showImg)
		
		item.addEventListener('click',  el => {
			let id = el.target.id;
			showImg.style.display = 'block';
			if (window.innerWidth > 515) {
				let bigImg = document.createElement('img');
					showImg.appendChild(bigImg);
					bigImg.src = `img/gallery/${items[i].bigImage}`;
			} else {
				showImg.style.display = 'none';
			}
		});
		showImg.addEventListener('click', () => {
			showImg.style.display = 'none';
			let bigImg = showImg.querySelector('img');
				showImg.removeChild(bigImg);
				bigImg.src = `img/gallery/${items[i].bigImage}`;
			
			
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
