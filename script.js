const imageSets = [
    ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
    ['5.jpg', '11.jpg', '7.jpg', '8.jpg'],
    ['9.jpg', '10.jpg', '11.jpg', '12.jpg']
];

const slideshow = document.getElementById('slideshow');
let currentIndex = 0;

function createSlide(imageSrc) {
    const img = document.createElement('img');
    img.src = imageSrc;
    return img;
}

function updateSlideshow() {
    slideshow.innerHTML = '';

    imageSets[currentIndex].forEach(imageSrc => {
        const slide = createSlide(imageSrc);
        slideshow.appendChild(slide);
    });

    currentIndex = (currentIndex + 1) % imageSets.length;
}

function preloadImages(imageSets) {
    imageSets.forEach(imageSet => {
        imageSet.forEach(imageSrc => {
            const img = new Image();
            img.src = imageSrc;
        });
    });
}

// Preload images
preloadImages(imageSets);

// Initial update
updateSlideshow();

// Change images every 5 seconds (adjust as needed)
setInterval(updateSlideshow, 3000);

document.addEventListener('DOMContentLoaded', function () {
    const textContainer = document.querySelector('.typewriter-text');
    const text = textContainer.textContent;

    textContainer.textContent = '';

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);

        const charElement = document.createElement('span');
        charElement.textContent = char;

        charElement.style.animation = `appear 0.5s ${i * 0.1}s forwards`;
        textContainer.appendChild(charElement);
    }
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

$(document).ready(function ($) {
    // Initialize Slick slider for workshops
    $('#workshops .card-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Initialize Slick slider for technicals
    $('#technicals .card-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Initial call to start the slideshow
showSlides();
