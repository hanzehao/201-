

var b = document.getElementsByClassName('lis');

function show(num) {
    b[num].style.display = 'block';
    b[num].style.zIndex = 1111;
}
function hid(num) {
    b[num].style.display = 'none';
}

var img = document.getElementsByClassName('img')[0];
var imgs = img.getElementsByTagName('a');
var i = 0;
function change() {
    imgs[i%8].style.display = 'none';
    i++;
    imgs[i%8].style.display = 'block';
}

var timer = setInterval(change,2000);

img.onmouseover = function () {
    clearInterval(timer);
};

img.onmouseout = function () {
    timer = setInterval(change,2000);
};

var left = document.getElementById('left');
var right = document.getElementById('right');


left.onclick = function () {

    imgs[i%8].style.display = 'none';
    i--;
    if(i < 0) {
        i = 7;
    }
    imgs[i%8].style.display = 'block';
};

right.onclick = function () {
    change();
};
