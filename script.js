window.onload = function () {

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const title = document.querySelector("#message-box h1");
  const messageBox = document.getElementById("message-box");
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  yesBtn.onclick = function () {

  title.innerText = "Happy Valentines Day Madhu❤️ I love you so much!";

  question.style.display = "none";
  buttons.style.display = "none";

  // Change background image
  document.body.style.background = "url('bg.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  setInterval(createHeart, 300);
};

  noBtn.onmouseover = function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
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

};


