// /*==================== MENU SHOW Y HIDDEN ====================*/
// const navMenu = document.getElementById('nav-menu'),
//     navToggle = document.getElementById('nav-toggle'),
//     navClose = document.getElementById('nav-close');
// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu');
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu');
//     })
// }

// /*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link');
// function linkAction(){
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.remove('show-menu');
// }
// navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

function sendMessage(){
    let msg = document.getElementById("msg").value;
    try {
        if(msg.length == ""){
            alert("message cannot be empty")
            return false;
        }
        window.open(`https://wa.me/+6287872485889?text=hello%20Agrieva!,%20${msg}`, '_blank');
    } catch (err) {
        console.error(err);
        alert("Error" + err.message);
    }
}
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop - sectionHeight){
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        }else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


function linkNotDefine(){
    alert('link website is not defined');
}
