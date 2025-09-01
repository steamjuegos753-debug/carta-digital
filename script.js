const openBtn = document.getElementById("openBtn");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

openBtn.addEventListener("click", () => {
  flap.style.transform = "rotateX(-180deg)";
  letter.style.top = "0";
  openBtn.innerText = "💖 Gracias por leer 💖";
});

/* Corazones flotando */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);
