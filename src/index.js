import "./styles.css";
import { createHomePage } from "./homePage";


const homeButton = document.querySelector("button#home");
const menuButton = document.querySelector("button#menu");
const aboutButton = document.querySelector("button#about");

homeButton.addEventListener("click", createHomePage);


