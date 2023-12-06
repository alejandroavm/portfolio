/* Menu show and hidden */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exist */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Validate if constant exist */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobil */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*-------------------- Accordion skills --------------------*/

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

/*-------------------- Swiper --------------------*/
let swiper = new Swiper('.project__container',{
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*-------------------- Scroll sections active link --------------------*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*-------------------- Typed --------------------*/

const typedcertificates = new Typed('.typed__certificates', {
    strings: ['Certificates'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 45,
    shuffle: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    contentType: 'html',
});
const typedabout = new Typed('.typed__aboutme', {
    strings: ['About me'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 45,
    shuffle: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    contentType: 'html',
});
const typedskills = new Typed('.typed__skills', {
    strings: ['Skills'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 45,
    shuffle: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    contentType: 'html',
});
const typedprojects = new Typed('.typed__projects', {
    strings: ['Projects'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 45,
    shuffle: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    contentType: 'html',
});
const typedcontact = new Typed('.typed__contact', {
    strings: ['Contact me'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 45,
    shuffle: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    contentType: 'html',
});