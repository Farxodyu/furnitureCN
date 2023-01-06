let xClose = document.querySelector('.close')
let burgerContainer = document.querySelector('.header__categories');
let burgerMenu = document.querySelector('.header__burger-menu')
const headerCategories = document.querySelectorAll('.header__categories__link');
const text = document.querySelector(".product__text");

text.innerHTML = text.innerHTML.split("").map(
    (char,i)=>`<span style="transform: rotate(${i*8.5}deg)">${char}</span>`
).join("")



xClose.addEventListener('click', () => {
    burgerContainer.style.transform = 'translateX(-100%)'
});
burgerMenu.addEventListener('click', () => {
    burgerContainer.style.transform = 'translateX(0)'
});
headerCategories.forEach((cal) => {
    if (window.innerWidth <= 992) {
        cal.addEventListener('click', () => {
            burgerContainer.style.transform = 'translateX(-100%)'
        })
    }
})

let tl = gsap.timeline()


tl.from('#cameraAnim', {
    y:-10,
    autoAlpha:0,
    duration:0.4,
}).from('#categoryAnim', {
    y:-10,
    autoAlpha:0,
    duration:0.4,
}).from('#despreAnim', {
    y:-10,
    autoAlpha:0,
    duration:0.4,
}).from('.header__logo-link', {
    y:-10,
    autoAlpha:0,
    duration:0.4,
}).from('.pseudoElements', {
    x:-50,
    autoAlpha:0,
    duration:0.4,
}).from('.header__contacts', {
    y:-10,
    autoAlpha:0,
    duration:0.4,
}).from('.countur', {
    x: 100,
    autoAlpha: 0,
    duration: 1
}).from('.conta-btn', {
    x: 100,
    autoAlpha: 0,
    duration: 1.5
})

gsap.from('.camere__title',{
    x:-250,
    autoAlpha: 0,
    duration:1,
    scrollTrigger:{
        trigger:'.camere__title',
    }
})
gsap.from('.product__img',{
    scale:0.5,
    autoAlpha: 0,
    duration:1,
    scrollTrigger:{
        trigger:'.product__img',
        start: 'top bottom-=100',
        scrub: 0.5
    }
})
gsap.from('.title',{
    x:100,
    autoAlpha: 0,
    duration:1,
    scrollTrigger:{
        trigger:'.title',
    }
})
gsap.from('.development__img_card-block',{
    x:-100,
    autoAlpha: 0,
    duration:1,
    scrollTrigger:{
        trigger:'.development__img_card-block',
        scrub: true
    }
})
gsap.from('.development__descr',{
    x:100,
    autoAlpha: 0,
    duration:1,
    scrollTrigger:{
        trigger:'.development__descr',
        scrub: true,
        start: 'top-=1500 bottom',
    }
})
gsap.from('.cards',{
    rotate:90,
    autoAlpha: 0,
    duration:1,
    scrollTrigger:{
        trigger:'.cards',
    }
})
gsap.from('.product__text',{
    rotate:360,
    autoAlpha: 0,
    duration:5,
    z:50,
    scrollTrigger:{
        trigger:'.product__text',
        scrub: true,
    }
})
gsap.to('.product__text',{
    y:100,
    scrollTrigger:{
        trigger:'.product__text',
        scrub: true,
    }
})


