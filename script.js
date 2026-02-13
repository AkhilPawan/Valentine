window.onload = function () {

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const title = document.querySelector("h1");
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  yesBtn.onclick = function () {

    // Change heading
    title.innerText = "❤️Happy Valentines Day❤️ I love you so much!";

    // Hide question + buttons
    question.style.display = "none";
    buttons.style.display = "none";

    // Start hearts
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
