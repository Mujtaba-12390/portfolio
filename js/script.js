// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu Icon and Navigation List
const menuIcon = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('active');
    
    const icon = menuIcon.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when scrolling
window.onscroll = () => {
    navlist.classList.remove('active');
    const icon = menuIcon.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
};

// Close menu on link click
navlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navlist.classList.remove('active');
        const icon = menuIcon.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    }
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
});

sr.reveal('.home-text', { delay: 350, origin: 'left' });
sr.reveal('.home-img', { delay: 350, origin: 'right' });

sr.reveal('.sub-service, .about, .portfolio, .service, .cta, .contact', { delay: 200, origin: 'bottom' });
