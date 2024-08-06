const images = ['images/img1.jpeg', 'images/img2.jpeg', 'images/img3.jpeg'];

let currentIndex = 0;

function changeImageAtInterval() {
    const imageElement = document.getElementById('displayed-image');

    imageElement.src = images[currentIndex];
    imageElement.alt = `Image ${currentIndex + 1}`;

    currentIndex = (currentIndex + 1) % images.length;
}

const intervalId = setInterval(changeImageAtInterval, 2000);

var a = 0;
var txt1 = '“The harder you work and the more prepared you are for something, you’re going to be able to persevere through anything.” – Carli Lloyd';
var speed = 40;
function typeWriter1() {
    if (a < txt1.length) {
        document.getElementById("quote1").innerHTML += txt1.charAt(a);
        a++;
        setTimeout(typeWriter1, speed);
    }
}
typeWriter1();

var b = 0;
var txt2 = 'The secret of getting ahead is getting started. — Mark Twain';
function typeWriter2() {
    if (b < txt2.length) {
        document.getElementById("quote2").innerHTML += txt2.charAt(b);
        b++;
        setTimeout(typeWriter2, speed);
    }
}
setInterval(typeWriter2, 7000);