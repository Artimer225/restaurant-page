import './styles.css';
import { home } from './home.js';
import { menu } from './menu.js';

class SectionManager {
    constructor() {
        const homePage = document.querySelector('#home');
        const menuPage = document.querySelector('#menu');
        const aboutPage = document.querySelector('#about');
        const content = document.querySelector('#content');

        const clearContent = () => {
            while (content.hasChildNodes()) {
                content.removeChild(content.lastChild);
            }
        }

        homePage.addEventListener('click', e => {
            clearContent()
            home.createLayout()
        });

        menuPage.addEventListener('click', e => {
            clearContent()
            menu.createLayout()
        });

        aboutPage.addEventListener('click', e => {

        });
    }
}

const manager = new SectionManager();
home.createLayout()

