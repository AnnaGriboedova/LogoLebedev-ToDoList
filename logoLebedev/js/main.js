var logo = document.getElementById('logo');

logo.addEventListener('mouseover', function () {
    logo.style.background = 'linear-gradient(to right, ' + generateColor() + ',' + generateColor() +')';
});

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}