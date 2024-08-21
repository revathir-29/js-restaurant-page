import {initialPageLoad} from './initial-page-load.js';
import {menu} from './menu.js';
import {contact} from './contact.js';
import './style.css';

//console.log("This is my console.log statement from source index.js!!!");
initialPageLoad();

let tabSwitchingModule = (function(){

    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click" , initialPageLoad);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);
})();

export default tabSwitchingModule;