
export function createHomePage() {

  const contentDiv = document.querySelector("div#content");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");


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

  homeContainer.appendChild(imageContainer);
  homeContainer.appendChild(centerContainer);

  contentDiv.appendChild(homeContainer)

  document.querySelectorAll("a").forEach(a => a.target = "_blank");
}
