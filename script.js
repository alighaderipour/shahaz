document.getElementById("loveBtn").addEventListener("click", function() {
    const msg = document.getElementById("message");
    msg.classList.toggle("hidden");
});

// ❤️ افکت قلب‌ها
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createHeart() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.5
    };
}

function drawHeart(x, y, size, alpha) {
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

function updateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.1) {
        hearts.push(createHeart());
    }
    for (let i = 0; i < hearts.length; i++) {
        const h = hearts[i];
        h.y -= h.speed;
        drawHeart(h.x, h.y, h.size, h.alpha);
        if (h.y < -20) {
            hearts.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(updateHearts);
}

updateHearts();
