import './main.style.css';
import home from './home';
import about from './about';
import menu from './menu'

const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const menuBtn = document.querySelector('.menu-btn');

const contentDiv = document.querySelector('.content');

homeBtn.addEventListener('click', loadHome);
aboutBtn.addEventListener('click', loadAbout);
menuBtn.addEventListener('click', loadMenu)

function loadHome() {
	contentDiv.innerText = '';
	contentDiv.appendChild(home());
}

function loadAbout() {
	contentDiv.innerText = '';
	contentDiv.appendChild(about());
}

function loadMenu() {
    contentDiv.innerText = '';
	contentDiv.appendChild(menu());
}


window.onload = loadHome();
