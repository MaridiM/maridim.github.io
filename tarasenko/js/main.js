let gallery = document.querySelector('.gallery');
let img = gallery.querySelectorAll('img');

let el = 0;
const slider = () => {
	for (let i = 0; i < img.length; i++) {
		img[i].style.display = 'none';
	}
	el++;

	if(el >= img.length) {
		el = 0;
	}
	img[el].style.display = 'block';	
}

setInterval(slider, 10000);
