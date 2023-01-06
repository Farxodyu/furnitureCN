let activeCategores = document.querySelector('.activeCategories');
let burgerMenu = document.querySelector('.header__categories');
let btnMenu   = document.querySelector('.icon-btn');

btnMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('activeCategories')) burgerMenu.classList.remove('activeCategories')
    else burgerMenu.classList.add('activeCategories')
})
document.querySelector('.close').addEventListener('click', () => {
    burgerMenu.classList.remove('activeCategories')
})