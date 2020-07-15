const sliderImgs = document.querySelectorAll('.slider-img');
const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');
const burger = document.querySelector('.burger');
const navbar = document.querySelector('#navbar');
const navLinks = document.querySelector('.nav-links');

// for doing the burger/mobile nav
burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    navbar.classList.toggle('active');
})

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navbar.classList.remove('active');
})

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {
    const active = document.querySelector('.active');
    // remove .active
    active.classList.remove('active');
    // check for next slide
    if(active.nextElementSibling) {
        active.nextElementSibling.classList.add('active')
    } else {
        sliderImgs[0].classList.add('active');
    }
}

function prevSlide() {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    if(active.previousElementSibling) {
        active.previousElementSibling.classList.add('active');
    } else {
        sliderImgs[sliderImgs.length-1].classList.add('active');
    }
}

// FOR THE MODAL WHEN USER SUBMITS A FORM
const submitBtn = document.querySelector('#submit-btn');
const modalBg = document.querySelector('.modal-bg');
const closeModal = document.querySelector('#close-modal');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modalBg.classList.add('active-modal');
});
closeModal.addEventListener('click', function() {
    modalBg.classList.remove('active-modal');
})
