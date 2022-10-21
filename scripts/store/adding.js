import { IPHONES } from "./iphones/iphonesList";

const iphones = document.querySelector(".content-iphones__info");

const addIPhones = () => {
    let content = "";
    IPHONES.forEach(item => {
        content += `
        <div class="iphone">
            <img class="iphone-photo" src="${item.img}" alt="iphone">
            <p class="iphone-title">${item.title}</p>
            <p class="iphone-price">${item.price} грн</p>
            <div class="pre-btn">
                <a href="#" class="iphone-btn">Детальніше</a>
            </div>
        </div>
    `;
    });
    console.log(content);
    iphones.innerHTML = content;
    return iphones;
}

addIPhones();