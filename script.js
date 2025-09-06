/* Hearts Background */
const heartsCanvas = document.getElementById('heartsCanvas');
const hCtx = heartsCanvas.getContext('2d');
let hearts = [];

function resizeHearts(){
    heartsCanvas.width = window.innerWidth;
    heartsCanvas.height = window.innerHeight;
}
resizeHearts();
window.addEventListener('resize', resizeHearts);

function createHeart(){
    return {
        x: Math.random() * heartsCanvas.width,
        y: heartsCanvas.height + 20,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.5
    };
}

function drawHeart(x, y, size, alpha){
    hCtx.globalAlpha = alpha;
    hCtx.fillStyle = "#ff4d6d";
    hCtx.beginPath();
    hCtx.moveTo(x, y);
    hCtx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y);
    hCtx.bezierCurveTo(x - size, y + size, x, y + size*1.5, x, y + size*2);
    hCtx.bezierCurveTo(x, y + size*1.5, x + size, y + size, x + size, y);
    hCtx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
    hCtx.fill();
    hCtx.globalAlpha = 1;
}

function updateHearts(){
    hCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
    if(Math.random() < 0.1) hearts.push(createHeart());
    hearts.forEach((h, i) => {
        h.y -= h.speed;
        drawHeart(h.x, h.y, h.size, h.alpha);
        if(h.y < -20) hearts.splice(i, 1);
    });
    requestAnimationFrame(updateHearts);
}
updateHearts();

/* Stars Background */
const starsCanvas = document.getElementById('starsCanvas');
const sCtx = starsCanvas.getContext('2d');
let stars = [];

function resizeStars(){
    starsCanvas.width = window.innerWidth;
    starsCanvas.height = window.innerHeight;
}
resizeStars();
window.addEventListener('resize', resizeStars);

function createStar(){
    return {
        x: Math.random() * starsCanvas.width,
        y: Math.random() * starsCanvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2
    };
}

for(let i = 0; i < 200; i++) stars.push(createStar());

function updateStars(){
    sCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
    sCtx.fillStyle = 'white';
    stars.forEach(star=>{
        sCtx.beginPath();
        sCtx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
        sCtx.fill();
        star.y += star.speed;
        if(star.y > starsCanvas.height) star.y = 0;
    });
    requestAnimationFrame(updateStars);
}
updateStars();

/* Scroll Fade In */
const fadeElems = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElems.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

/* Typed Text */
const typedTextEl = document.getElementById('typedText');
const finalText = "تا همیشه ❤️ هر کجا که باشی، قلب من آنجاست...";
let i = 0;
function typeEffect(){
    if(i < finalText.length){
        typedTextEl.innerHTML += finalText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();
