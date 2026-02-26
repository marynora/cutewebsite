const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

function moveButton(e) {
    e.preventDefault();

    const padding = 20;

    const maxX = window.innerWidth - yesBtn.offsetWidth - padding;
    const maxY = window.innerHeight - yesBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX + padding;
    const randomY = Math.random() * maxY + padding;

    yesBtn.style.position = "absolute";
    yesBtn.style.left = randomX + "px";
    yesBtn.style.top = randomY + "px";
}

// Detect mobile
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
    // Mobile: move on tap
    yesBtn.addEventListener("touchstart", moveButton);
} else {
    // Desktop: move on hover
    yesBtn.addEventListener("mouseover", moveButton);
}

function goToSadPage() {
    window.location.href = "sad.html";
}