const panel = document.getElementById("panel");

const buyButton = document.getElementById("buyButton");

const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

const detailsButton = document.getElementById("detailsButton");
const detailsOverlay = document.getElementById("detailsOverlay");
const closeDetails = document.getElementById("closeDetails");

const contentNormal = document.getElementById("contentNormal");
const contentVideo = document.getElementById("contentVideo");

const btnRow = document.getElementById("btnRow");
const productVideo = document.getElementById("productVideo");

let isVideoMode = false;

function showNormal() {
  contentNormal.style.display = "flex";
  contentVideo.style.display = "none";
  btnRow.style.display = "flex";
  isVideoMode = false;

  productVideo.pause();
  productVideo.currentTime = 0;
}

function showVideo() {
  contentNormal.style.display = "none";
  contentVideo.style.display = "flex";
  btnRow.style.display = "none";
  isVideoMode = true;

  productVideo.play();
}

function toggleMode() {
  if (isVideoMode) showNormal();
  else showVideo();
}

nextArrow.addEventListener("click", toggleMode);
prevArrow.addEventListener("click", toggleMode);

detailsButton.addEventListener("click", () => {
  detailsOverlay.classList.add("show");
});

closeDetails.addEventListener("click", () => {
  detailsOverlay.classList.remove("show");
});

buyButton.addEventListener("click", async () => {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  window.location = data.url;
});

// MOUSE MOVE TILT
window.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;

  const rotateY = x * 15;
  const rotateX = -y * 15;

  panel.style.transform = `rotateX(${20 + rotateX}deg) rotateY(${-10 + rotateY}deg)`;
});

// SNOW EFFECT
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
