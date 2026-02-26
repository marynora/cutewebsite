const sadImage = document.getElementById("sadImage");
const sadText = document.getElementById("sadText");

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
    sadImage.src = "pepe.png";
    sadText.textContent = "Why do you hate me???";
} else {
    sadImage.src = "pepe-socket.png";
    sadText.textContent = "I'LL DO IT!!!!";
}