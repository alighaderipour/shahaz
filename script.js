// جملات عاشقانه فرانسوی
const loveQuotes = [
  "Avec toi, l'amour a pris tout son sens. Je t'aime à la folie, Fatemeh ! 💕",
  "Chaque moment à tes côtés est un trésor inestimable. Merci d'être dans ma vie. ❤️",
  "Ton sourire fait fleurir mon cœur. Je t'aime plus que tout, ma belle Fatemeh.",
  "Avec toi, le monde est plus doux, la vie plus belle, et mes rêves plus grands. 🌷",
  "Je t'aime plus que les mots ne peuvent le dire. Tu es mon poème vivant. ✨",
  "Grâce à toi, chaque matin commence par un miracle… Je t'aime plus chaque jour.",
  "Être avec toi, c'est comme vivre dans un conte de fées sans fin. Merci d'être mon amour. 💖",
  "Ta tendresse est mon refuge préféré. Je promets de t'aimer toujours, Fatemeh ! 🥰",
  "Même après mille vies, c'est toi que je choisirais encore. Je t'aime infiniment.",
  "Parmi toutes les étoiles, tu es la plus brillante dans mon ciel. Je t'adore, mon amour !",
];

const msg = document.getElementById("love-message-fr");
const btn = document.getElementById("more-love");

btn.addEventListener("click", () => {
  let old = msg.textContent.trim();
  let quote;
  do {
    quote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  } while (quote === old && loveQuotes.length > 1);
  msg.textContent = quote;
});

// افکت قلب‌ها
const hearts = document.querySelector(".hearts");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${10 + Math.random() * 80}%`;
  heart.style.setProperty("--x", `${64 * (Math.random() - 0.5)}px`);
  heart.style.background = [
    "#e676ad",
    "#ff97be",
    "#fa89bd",
    "#fbbbde",
    "#efd0eb",
  ][Math.floor(Math.random() * 5)];
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 4200);
}
setInterval(createHeart, 700);
