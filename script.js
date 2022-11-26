let viewierList = document.querySelector('.images-viewier__list');
let viewierButtonBar = document.querySelector('.images-viewier__button-bar');
let buttonBack = viewierButtonBar.querySelector('.button--back');
let buttonForward = viewierButtonBar.querySelector('.button--forward');

buttonBack.addEventListener('click', function () {
    viewierList.scrollTo(0, 0);
});

buttonForward.addEventListener('click', function () {
    viewierList.scrollTo(viewierList.scrollWidth, 0)
});

