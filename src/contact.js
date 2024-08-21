import phoneImage1 from './assets/phoneImage1.jpg';
import emailImage from './assets/mailImage.jpg';
import mailImage from './assets/addressImage.png';

export function contact() {
    const contentDiv =document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Contact LimeLight Restaurant";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const phoneImage = document.createElement("img");
    phoneImage.classList.add("image1");
    phoneImage.src =phoneImage1;
    phoneImage.alt = "Image of phone";
    contentDiv.appendChild(phoneImage);

    const para1PhoneImage = document.createElement("p");
    para1PhoneImage.classList.add("contact-copy");
    para1PhoneImage.textContent = "Call us: 1234567890";
    contentDiv.appendChild(para1PhoneImage);
    
    const email = document.createElement("img");
    email.classList.add("image1");
    email.src = emailImage;
    email.alt = "Image of email";
    contentDiv.appendChild(email);

    const para2EmailImage = document.createElement("p");
    para2EmailImage.classList.add("contact-copy");
    para2EmailImage.textContent = "Email us at limelight@restaurant.com";
    contentDiv.appendChild(para2EmailImage);

    const topImage = document.createElement("img");
    topImage.classList.add("image1");
    topImage.src =mailImage;
    topImage.alt = "Image of mailing address";
    contentDiv.appendChild(topImage);

    const para3AddressImage = document.createElement("p");
    para3AddressImage.classList.add("contact-copy");
    para3AddressImage.textContent = "Address: 123 Street, Town";
    contentDiv.appendChild(para3AddressImage);

}