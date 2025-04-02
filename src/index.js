import "./styles.css";

import { createHomePage } from "./homePage";
import { createMenuPage } from "./menuPage";
import { createAboutPage } from "./aboutMePage";


const contentDiv = document.querySelector("div#content");

const homeButton = document.querySelector("button#home");
const menuButton = document.querySelector("button#menu");
const aboutButton = document.querySelector("button#about");

createHomePage();

homeButton.addEventListener("click", () => {
  deleteContent(contentDiv);
  createHomePage();
});

menuButton.addEventListener("click", () => {
  deleteContent(contentDiv);
  createMenuPage();
})

aboutButton.addEventListener("click", () => {
  deleteContent(contentDiv);
  createAboutPage();
});

function deleteContent(element) {
  element.innerHTML = "";
}

