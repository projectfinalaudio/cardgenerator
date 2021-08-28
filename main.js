const body = document.querySelector('body');
const container = document.querySelector('.container');

body.addEventListener('mouseover', bgColor);
body.addEventListener('mouseout', resetBgColor);

container.addEventListener('mouseover', addShadow);
container.addEventListener('mouseout', resetShadow);

function bgColor() {
    body.style.background = 'rgb(243, 218, 186)';
}

function resetBgColor() {
    body.style.background = 'antiquewhite';
}

function addShadow() {
    container.style.boxShadow = '0px 8px 32px 0px rgba(0, 0, 0, .2)';
}

function resetShadow() {
    container.style.boxShadow = '0px 2px 8px 0px rgba(0, 0, 0, .3)';
}