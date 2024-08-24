/* ================================= toggle icon navbar ====================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/* ================================= scroll sections active link ====================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* ================================= sticky navbar ====================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

    /* ================================= remove toggle icon and navbar when click navbar link (scrool) ====================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ================================= Function Gallery ====================== */
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(() => {next.click()}, 4000);
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(() => {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})

/* ================================= Scroll Reveal ====================== */
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .teams-container, .achievement-row, .gallery-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' });

/* ================================= typed js ====================== */
const typed =new Typed('.multiple-text', {
    strings: ['Unit Kegiatan Robotika Universitas Negeri Padang', 'Robotic Team Padang State University'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});