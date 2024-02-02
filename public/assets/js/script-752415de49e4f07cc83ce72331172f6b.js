document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burger-menu');
    const header = document.querySelector('header');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerButton.addEventListener('click', function () {
        header.classList.toggle('header-menu');
    });
});