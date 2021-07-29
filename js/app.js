const btnHamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.nav__list--mobile');

btnHamburger.addEventListener('click', () => {
	if (nav.classList.contains('open')) {
		//Close hamburger menu
		nav.classList.remove('open');
		menu.style.display = 'none';
	} else {
		//Open hamburger menu
		nav.classList.add('open');
		menu.style.display = 'flex';
		menu.classList.toggle('open');
	}
});
