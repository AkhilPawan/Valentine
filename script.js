const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.getElementById("title");

yesBtn.onclick = function () {
  title.innerText = "Yayyy ❤️ I love you so much!";

  setInterval(createHeart, 300);
};

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

noBtn.onmouseover = function () {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
};
