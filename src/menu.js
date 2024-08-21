import greenBeanCassImage from './assets/greenBeanCasserole.jpg';
import macnCheeseImage from './assets/macAndCheeseDish.jpg';
import spaghettiImage from './assets/spaghetti.jpg';
import lasagnaImage from './assets/lasagna.jpg';

export function menu(){

    const contentDiv =document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "LimeLight Restaurant's Menu";
    heading.classList.add("landing-title")
    contentDiv.appendChild(heading);

    const greenBeanCass = document.createElement("img");
    greenBeanCass.classList.add("image");
    greenBeanCass.src=greenBeanCassImage ;
    greenBeanCass.alt = "Image of Green Bean Casserole";
    contentDiv.appendChild(greenBeanCass);

    const para1GreeanBeanCass = document.createElement("p");
    para1GreeanBeanCass.classList.add("menu-copy");
    para1GreeanBeanCass.textContent ="Green Bean Casserole";
    contentDiv.appendChild(para1GreeanBeanCass);

    const macnCheese = document.createElement("img");
    macnCheese.classList.add("image");
    macnCheese.src=macnCheeseImage;
    macnCheese.alt = "Image of Mac and Cheese Dish";
    contentDiv.appendChild(macnCheese);

    const para1macnCheese = document.createElement("p");
    para1macnCheese.classList.add("menu-copy");
    para1macnCheese.textContent ="Mac and Cheese";
    contentDiv.appendChild(para1macnCheese);

    const spaghetti = document.createElement("img");
    spaghetti.classList.add("image");
    spaghetti.src=spaghettiImage;
    spaghetti.alt = "Image of spaghetti";
    contentDiv.appendChild(spaghetti);

    const para1spaghetti = document.createElement("p");
    para1spaghetti.classList.add("menu-copy");
    para1spaghetti.textContent ="Spaghetti";
    contentDiv.appendChild(para1spaghetti);

    const lasagna= document.createElement("img");
    lasagna.classList.add("image");
    lasagna.src=lasagnaImage;
    lasagna.alt = "Image of lasagna";
    contentDiv.appendChild(lasagna);

    const para1lasagna = document.createElement("p");
    para1lasagna .classList.add("menu-copy");
    para1lasagna .textContent ="Lasagna";
    contentDiv.appendChild(para1lasagna );

}