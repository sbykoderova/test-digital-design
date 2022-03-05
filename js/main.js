// Button Up

const pageup = document.querySelector('.pageup');

function scrollTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 1200) {
            pageup.style.opacity = 1;
        } else {
            pageup.style.opacity = 0;
        }
    });
}

scrollTop();

// Menu Burger

const burger = document.querySelector('.burger');
if (burger) {
    const menuBurger = document.querySelector('.burger__menu');
    burger.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBurger.classList.toggle('_active');
    });
}