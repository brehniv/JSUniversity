const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
let timer = 0;
function toggleMenu() {
    menu.classList.toggle("active");
}
hamburger.addEventListener("click", toggleMenu);
document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideHamburger) {
        menu.classList.remove("active");
    }
});
window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 768) {
        menu.classList.remove("active");
    }
});



const photos = ['https://place-hold.it/1080x640/585cdf','https://place-hold.it/640x640/f7a325','https://place-hold.it/640x640/f56038', 'https://place-hold.it/640x640/cddaff&', 'https://place-hold.it/640x640'];
const carousel = document.getElementById('carousel');
const slidesContainer = carousel.querySelector('#carousel-slides');
const dotsContainer = carousel.querySelector('#indicators');

photos.forEach(function(photo) {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    const img = document.createElement('img');
    img.src = photo;
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
});
const indicators = document.getElementById("indicators");
    if (indicators) {
        for (let i = 0; i < photos.length; i++) {
            const div = document.createElement("div");
            div.classList.add("indicator");
            indicators.appendChild(div);
        }
    }
carousel.querySelector('#prev-btn').addEventListener('click', function() {
    showSlide(currentSlideIndex - 1);
});
carousel.querySelector('#next-btn').addEventListener('click', function() {
    showSlide(currentSlideIndex + 1);
});
const dots = carousel.querySelectorAll('.indicator');
dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        showSlide(index);
    });
});

let currentSlideIndex = 0;
showSlide(currentSlideIndex);
function showSlide(index) {
    const slides = carousel.querySelectorAll('.slide');
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    const slideIndicators = document.getElementsByClassName("indicator");
    for (let i = 0; i < slideIndicators.length; i++) {
        slideIndicators[i].classList.remove("active");

        slideIndicators[index].classList.add("active");
    }
    clearInterval(timer);
    
    slides.forEach(function(slide) {
        slide.style.maxWidth = '0';
    });
    slides[index].style.maxWidth = '600px';
    


    currentSlideIndex = index; 
    timer = setInterval(() => {
        showSlide(currentSlideIndex+1);
    }, 3000);
}