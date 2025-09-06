// Hearts Canvas Animation
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart(){
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
    alpha: Math.random() * 0.5 + 0.5
  };
}

function drawHeart(x, y, size, alpha){
  ctx.globalAlpha = alpha;
  ctx.fillStyle = "#ff4d6d";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size*1.5, x, y + size*2);
  ctx.bezierCurveTo(x, y + size*1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function updateHearts(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(Math.random() < 0.1) hearts.push(createHeart());
  for(let i = 0; i < hearts.length; i++){
    let h = hearts[i];
    h.y -= h.speed;
    drawHeart(h.x, h.y, h.size, h.alpha);
    if(h.y < -20){hearts.splice(i,1);i--;}
  }
  requestAnimationFrame(updateHearts);
}
updateHearts();

// Stars Canvas Animation
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

for(let i = 0; i < 200; i++){stars.push(createStar());}

function updateStars(){
  sCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  sCtx.fillStyle = 'white';
  stars.forEach(star=>{
    sCtx.beginPath();
    sCtx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
    sCtx.fill();
    star.y += star.speed;
    if(star.y > starsCanvas.height){star.y = 0;}
  });
  requestAnimationFrame(updateStars);
}
updateStars();

// Scroll Fade-in
const fadeElems = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeElems.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// Typed Text
const typedTextEl = document.getElementById('typedText');
const text = "تا همیشه ❤️ هر جا که باشی، قلب من آنجاست...";
let i = 0;
function typeEffect(){
  if(i < text.length){
    typedTextEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();
