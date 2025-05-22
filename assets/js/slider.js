console.log("Slider carregado!");

const slider = document.querySelectorAll('.slider');
const btnPrev = document.querySelector('#prev-button');
const btnNext = document.querySelector('#next-button');


let currentSlide = 0;

function hideSlider () {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
    slider[currentSlide].classList.add('on');
}

function nextSlider () {
    hideSlider();
    if (currentSlide === slider.length - 1) { // Volta para o primeiro slider
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    showSlider();
}

function prevSlider () {
    hideSlider();
    if (currentSlide === 0) { // Volta para o primeiro slider
        currentSlide = slider.length-1;
    } else {
        currentSlide--;
    }

    showSlider();
}


btnPrev.addEventListener('click', () => {
    // console.log("prev clicado");

    prevSlider();
});

btnNext.addEventListener('click', () => {
    // console.log("next clicado");

    nextSlider();
});

console.log(slider);

setInterval(nextSlider, 7000);

console.log(slider);