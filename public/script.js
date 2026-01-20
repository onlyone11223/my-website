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

// FIX: reset buttons & event listeners ALWAYS
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

// DETAILS WORKS EVERY TIME
detailsButton.addEventListener("click", () => {
  detailsOverlay.classList.add("show");
});

closeDetails.addEventListener("click", () => {
  detailsOverlay.classList.remove("show");
});

// BUY BUTTON WORKS EVERY TIME
buyButton.addEventListener("click", async () => {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  window.location = data.url;
});
