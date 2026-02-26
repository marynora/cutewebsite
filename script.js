const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - yesBtn.offsetWidth;
    const maxY = window.innerHeight - yesBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    yesBtn.style.left = randomX + "px";
    yesBtn.style.top = randomY + "px";
});

function goToSadPage() {
    window.location.href = "sad.html";
}