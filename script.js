const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");
const heartsContainer = document.querySelector(".hearts");

surpriseBtn.addEventListener("click", () => {
  surpriseMessage.hidden = false;
  surpriseBtn.textContent = "Surpresa aberta! 💖";
  surpriseBtn.disabled = true;

  surpriseMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Uma chuva de corações para celebrar!
  for (let i = 0; i < 24; i++) {
    setTimeout(createHeart, i * 100);
  }
});

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "floating-heart";
  heart.textContent = ["💗", "💕", "💖", "💘", "♡"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${16 + Math.random() * 22}px`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`;

  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}