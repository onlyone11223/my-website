const panel = document.querySelector(".panel");
const buyButton = document.getElementById("buyButton");
const message = document.getElementById("message");

buyButton.addEventListener("click", () => {
  message.innerText = "Purchase successful! (Demo mode)";
});

window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;

  const rotateY = x * 15;
  const rotateX = -y * 15;

  panel.style.transform = `rotateX(${20 + rotateX}deg) rotateY(${-10 + rotateY}deg)`;
});

/* Snow effect */
const snowContainer = document.querySelector(".snow");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.innerText = "❄";

  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 8000);
}

setInterval(createSnowflake, 200);

const detailsButton = document.getElementById("detailsButton");
const detailsOverlay = document.getElementById("detailsOverlay");
const closeDetails = document.getElementById("closeDetails");

detailsButton.addEventListener("click", () => {
  detailsOverlay.style.display = "flex";
});

closeDetails.addEventListener("click", () => {
  detailsOverlay.style.display = "none";
});
