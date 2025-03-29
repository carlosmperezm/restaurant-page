import imagePath from "./assets/about-image.jpg";
// Photo by <a href=""></a> on <a href="">Unsplash</a>


export function createAboutPage() {
  const contentDiv = document.querySelector("div#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("about-image-container");

  const image = document.createElement("img");
  image.src = imagePath;
  image.alt = "a man cooking";
  image.classList.add("about-image");


  const shoutout = document.createElement("p");
  shoutout.classList.add("shoutout");

  const authorLink = document.createElement("a");
  authorLink.href = "https://unsplash.com/@chloeevans?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  authorLink.textContent = "Chloe Evans";

  const siteLink = document.createElement("a");
  siteLink.href = "https://unsplash.com/photos/a-couple-of-people-that-are-cooking-in-a-kitchen-jI4eWZMbIXI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
  siteLink.textContent = "Unsplash";


  const textContainer = document.createElement("div");
  textContainer.classList.add("about-text-container");

  const text = document.createElement("p");
  text.textContent = ` At [Restaurant Name], we’re all about fresh, flavorful food made just right. From juicy burgers and crispy fries to delicious chicken and refreshing salads, we serve up meals that satisfy every craving. Our ingredients are top-quality, our recipes are made with care, and our team is dedicated to giving you a great dining experience. Whether you're grabbing a quick bite or enjoying a meal with friends and family, we’re here to serve up the best flavors with a smile. Come taste the difference!`


  shoutout.appendChild(authorLink);
  shoutout.appendChild(document.createTextNode("on"));
  shoutout.appendChild(siteLink);

  textContainer.appendChild(text);

  imageContainer.appendChild(image);
  imageContainer.appendChild(shoutout);

  aboutContainer.appendChild(imageContainer);
  aboutContainer.appendChild(textContainer);

  contentDiv.appendChild(aboutContainer);

}
