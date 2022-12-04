let viewierList = document.querySelector('.images-viewier__list');
let viewierItems = viewierList.children;

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider__images-list');
let sliderButtonBar = slider.querySelector('.slider__button-bar');
let buttonBack = sliderButtonBar.querySelector('.button--back');
let buttonForward = sliderButtonBar.querySelector('.button--forward');

buttonBack.disabled = true;

for (let item of viewierItems) {
    let clonedItem = item.cloneNode(true);
    clonedItem.classList.remove('images-viewier__item');
    clonedItem.classList.add('slider__images-item');
    sliderList.appendChild(clonedItem);
}

let sliderItems = sliderList.children;

let shiftCounter = 0;

let scrollRate = 95;
if (window.innerWidth >= 980) {
    scrollRate = 185;
}

function shiftItem (counter) {
    let shiftAmount = counter * 100;
    for (let item of sliderItems) {
        item.style.transform = `translateX(-${shiftAmount}%)`;
    }
}

function shiftCurrent (counter, current, rate) {
    viewierList.scrollTo(counter * rate, 0);
    viewierItems[current].classList.remove('current');
    viewierItems[counter].classList.add('current');
}

buttonBack.addEventListener('click', function () {
    if (shiftCounter === (sliderItems.length - 1)) {
        buttonForward.disabled = false;
        buttonForward.classList.remove('button--disabled');
    }
    shiftCounter--;
    shiftItem(shiftCounter);
    shiftCurrent(shiftCounter, shiftCounter + 1, scrollRate);
    if (shiftCounter === 0) {
        buttonBack.disabled = true;
        buttonBack.classList.add('button--disabled');
    }
});

buttonForward.addEventListener('click', function () {
    if (shiftCounter === 0) {
        buttonBack.disabled = false;
        buttonBack.classList.remove('button--disabled');
    }
    shiftCounter++;
    shiftItem(shiftCounter);
    shiftCurrent(shiftCounter, shiftCounter - 1, scrollRate);
    if (shiftCounter === (sliderItems.length - 1)) {
        buttonForward.disabled = true;
        buttonForward.classList.add('button--disabled');
    }
});



