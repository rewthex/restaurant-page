import './main.style.css';
import home from './home';
import about from './about';

const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const menuBtn = document.querySelector('.menu-btn');

const contentDiv = document.querySelector('.content');

homeBtn.addEventListener('click', () => {
    contentDiv.innerText = ''
    contentDiv.appendChild(home)
});

aboutBtn.addEventListener('click', () => {
    contentDiv.innerText = ''
    contentDiv.appendChild(about)
})