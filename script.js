const surpriseBtn = document.getElementById("surpriseBtn");
const loveMessage = document.getElementById("loveMessage");

// Open the surprise message
if (surpriseBtn && loveMessage) {
surpriseBtn.addEventListener("click", function () {
loveMessage.style.display = "block";
surpriseBtn.textContent = "Your Surprise Is Here ❤️";
surpriseBtn.disabled = true;
});
}

// Create floating hearts
function createHeart() {
const heart = document.createElement("span");
heart.className = "floating-heart";

```
const emojis = ["❤️", "💕", "💖", "💗", "🌹"];
heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

heart.style.left = Math.random() * 95 + "vw";
heart.style.fontSize = (25 + Math.random() * 20) + "px";

document.body.appendChild(heart);

heart.addEventListener("animationend", function () {
    heart.remove();
});
```

}

setInterval(createHeart, 700);
