document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burger-menu');
    const navRight = document.querySelector('.nav-right');

    burgerButton.addEventListener('click', function () {
        navRight.classList.toggle('active');
    });
});