
const phoneValidation = () => {
    const userPhone = document.querySelectorAll('input[name="user_phone"]');

    const formatNumbers = () => {
        userPhone.forEach(item => {
            item.addEventListener('input', () => {
                if (item.value.length >= 13) {
                    item.value = item.value.slice(0, 13);
                }
                else {
                    item.value = item.value.replace(/\D/, '');
                }
            });
        });
    }

    formatNumbers();
}

function showMore() {
    const topText = document.querySelector('.about__subtitle-top');
    const midText = document.querySelector('.about__subtitle-mid');
    const bottomText = document.querySelector('.about__subtitle-bottom');

    const hiddenText = document.querySelector('.about__subtitle-hidden');
    const btn = document.querySelector('.about__link');

    if (hiddenText.style.display == "none") {
        topText.style.color = "rgba(255,255,255,1)";
        midText.style.color = "rgba(255,255,255,1)";
        bottomText.style.color = "rgba(255,255,255,1)";
        hiddenText.style.display = "inline";
        btn.innerHTML = "Згорнути";
    }
    else {
        topText.style.color = "rgba(197, 198, 199, 0.8)";
        midText.style.color = "rgba(197, 198, 199, 0.5)";
        bottomText.style.color = "rgba(197, 198, 199, 0.2)";
        hiddenText.style.display = "none";
        btn.innerHTML = "Показати все";
    }
}

phoneValidation();
