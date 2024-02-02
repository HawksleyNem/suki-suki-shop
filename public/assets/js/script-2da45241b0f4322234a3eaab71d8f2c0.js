document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burger-menu');
    const closeButton = document.querySelector('.close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    closeButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});