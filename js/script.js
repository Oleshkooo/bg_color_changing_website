var colorWell;
var defaultColor = '#231F20';

window.addEventListener('load', startup, false);

function startup() {
    colorWell = document.querySelector('#colorWell');
    colorWell.value = defaultColor;
    colorWell.addEventListener('input', updateFirst, false);
    colorWell.addEventListener('change', updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    var body = document.querySelector('body');

    if (body) {
        body.style.background = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll('body').forEach(body => {
        body.style.background = event.target.value;
    });
}