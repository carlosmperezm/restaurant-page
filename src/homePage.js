import image from "./assets/landing-image.jpg";

export function createHomePage() {

  const contentDiv = document.querySelector("div#content");

  const landingImage = document.createElement("img");
  landingImage.src = image;//"./assets/landing-image.jpg";
  landingImage.alt = "burguers, fries, chicken and salad on plates";
  landingImage.classList.add("landing-image");

  const centerContainer = document.createElement("div");
  centerContainer.classList.add("center-container");

  const title = document.createElement("h1");
  title.textContent = "Better Food Better Mood";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const orderButton = document.createElement("button");
  orderButton.textContent = "Order Now";

  buttonContainer.appendChild(orderButton);

  centerContainer.appendChild(title);
  centerContainer.appendChild(buttonContainer);

  contentDiv.appendChild(landingImage);
  contentDiv.appendChild(centerContainer);
}
