let viewierList = document.querySelector('.images-viewier__list');
let viewierItems = viewierList.children;

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider__images-list');
let sliderButtonBar = slider.querySelector('.slider__button-bar');
let buttonBack = sliderButtonBar.querySelector('.button--back');
let buttonForward = sliderButtonBar.querySelector('.button--forward');

for (let item of viewierItems) {
    let clonedItem = item.cloneNode(true);
    clonedItem.classList.remove('images-viewier__item');
    clonedItem.classList.add('slider__images-item');
    sliderList.appendChild(clonedItem);
}

let sliderItems = sliderList.children; 
let movementCounter = 0;

buttonBack.addEventListener('click', function () {
    viewierList.scrollTo(0, 0);
    for (let item of sliderItems) {
        item.style.transform = 'translateX(0)';
    }
});

buttonForward.addEventListener('click', function () {
    viewierList.scrollTo(viewierList.scrollWidth, 0);
    movementCounter++;
    let movementValue = movementCounter * 100;
    for (let item of sliderItems) {
        item.style.transform = `translateX(-${movementValue}%)`;
    }
});



