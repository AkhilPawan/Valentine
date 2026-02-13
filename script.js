const yes = document.getElementById("yes");
const no = document.getElementById("no");

yes.addEventListener("click", () => {
  confetti();
  document.querySelector("h1").innerText = "Yayyy ❤️ I love you!";
});

no.addEventListener("mouseover", () => {
  no.style.position = "absolute";
  no.style.left = Math.random() * 80 + "%";
  no.style.top = Math.random() * 80 + "%";
});