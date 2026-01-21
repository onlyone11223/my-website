const panel = document.getElementById("panel");

const buyButton = document.getElementById("buyButton");
const detailsButton = document.getElementById("detailsButton");

const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

const detailsOverlay = document.getElementById("detailsOverlay");
const closeDetails = document.getElementById("closeDetails");

const contentNormal = document.getElementById("contentNormal");
const contentVideo = document.getElementById("contentVideo");
const productVideo = document.getElementById("productVideo");

let isVideoMode = false;

function showNormal() {
  contentNormal.style.display = "block";
  contentVideo.style.display = "none";
  isVideoMode = false;
  productVideo.pause();
  productVideo.currentTime = 0;
}

function showVideo() {
  contentNormal.style.display = "none";
  contentVideo.style.display = "block";
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
  panel.classList.add("hide");
});

closeDetails.addEventListener("click", () => {
  detailsOverlay.classList.remove("show");
  panel.classList.remove("hide");
});

buyButton.addEventListener("click", async () => {
  // ⭐ Replace with your Stripe Price ID
  const priceId = "price_1Srq7L2zyDlH7dFclflLD4DV";

  const stripe = Stripe("pk_test_51SrP9H2zyDlH7dFclOnSSQodqM3UrycyXJuUGxQje3Uz0lcbN43SAegV3rzu02sY0cJ641UHAV9UeZ67wFb4EYqy00CbXVuFFv");

  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    successUrl: "https://staticresells.com/success.html",
    cancelUrl: "https://staticresells.com",
  });

  if (error) {
    console.error(error);
  }
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

showNormal();
