import imagePath from "./assets/landing-image.jpg";

export function createHomePage() {

  const contentDiv = document.querySelector("div#content");

  const imagenContainer = document.createElement("div");
  imagenContainer.classList.add("imagen-container");

  const image = document.createElement("img");
  image.src = imagePath;
  image.alt = "burguers, fries, chicken and salad on plates";
  image.classList.add("landing-image");

  const shoutout = document.createElement("p");
  shoutout.classList.add("shoutout");

  const authorLink = document.createElement("a");
  authorLink.href = "https://unsplash.com/@mustafabashari?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  authorLink.textContent = "Mustafa Bashari";

  const siteLink = document.createElement("a");
  siteLink.href = "https://unsplash.com/photos/fries-and-burger-on-white-ceramic-plate-ZXQ9m5kgO8Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  siteLink.textContent = "Unsplash";



  const centerContainer = document.createElement("div");
  centerContainer.classList.add("center-container");

  const title = document.createElement("h1");
  title.textContent = "Better Food Better Mood";

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const orderButton = document.createElement("button");
  orderButton.textContent = "Order Now";


  shoutout.appendChild(authorLink);
  shoutout.appendChild(document.createTextNode(" on "));
  shoutout.appendChild(siteLink);

  imagenContainer.appendChild(image);
  imagenContainer.appendChild(shoutout);


  buttonContainer.appendChild(orderButton);

  centerContainer.appendChild(title);
  centerContainer.appendChild(buttonContainer);

  contentDiv.appendChild(imagenContainer);
  contentDiv.appendChild(centerContainer);
  contentDiv.appendChild(shoutout);

  document.querySelectorAll("a").forEach(a => a.target = "_blank");
}
