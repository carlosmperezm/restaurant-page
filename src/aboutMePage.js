

export function createAboutPage() {
  const contentDiv = document.querySelector("div#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const title = document.createElement("h1");
  title.textContent = "Our Mission";

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("about-image-container");

  const textContainer = document.createElement("div");
  textContainer.classList.add("about-text-container");

  const text = document.createElement("p");
  text.textContent = ` At [Restaurant Name], we’re all about fresh, flavorful food made just right. From juicy burgers and crispy fries to delicious chicken and refreshing salads, we serve up meals that satisfy every craving. Our ingredients are top-quality, our recipes are made with care, and our team is dedicated to giving you a great dining experience. Whether you're grabbing a quick bite or enjoying a meal with friends and family, we’re here to serve up the best flavors with a smile. Come taste the difference!`

  textContainer.appendChild(text);

  aboutContainer.appendChild(title);
  aboutContainer.appendChild(textContainer);
  aboutContainer.appendChild(imageContainer);

  contentDiv.appendChild(aboutContainer);

}
