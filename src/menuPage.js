const hotDrinks = {
  Capuchino: '$2.50',
  Latte: '$3.75',
  Americano: '$2.00',
  Mocca: '$4.35',
}

const coldDrinks = {
  Capuchino: '$3.00',
  'Macchiato Frap': '$4.75',
  'Ice Coffe': '$2.00',
  'Mocca Frap': '$4.35',
}

export function createMenuPage() {
  const contentDiv = document.querySelector("div#content");

  const aboutPageContainer = document.createElement("div");
  aboutPageContainer.classList.add("about-page-container");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("menu-image-container");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const hotDrinksContainer = document.createElement("div");
  hotDrinksContainer.classList.add("drinks-container");

  const hotDrinksTitle = document.createElement("p");
  hotDrinksTitle.textContent = "Hot Drinks";
  hotDrinksTitle.classList.add("drinks-title");

  const hotDrinksDiv = document.createElement("div");
  insertDrinks(hotDrinks, hotDrinksDiv);

  const coldDrinksContainer = document.createElement("div");
  coldDrinksContainer.classList.add("drinks-container");

  const coldDrinksTitle = document.createElement("p");
  coldDrinksTitle.textContent = "Hot Drinks";
  coldDrinksTitle.classList.add("drinks-title");

  const coldDrinksDiv = document.createElement("div");
  insertDrinks(coldDrinks, coldDrinksDiv);


  hotDrinksContainer.appendChild(hotDrinksTitle);
  hotDrinksContainer.appendChild(hotDrinksDiv);

  coldDrinksContainer.appendChild(coldDrinksTitle);
  coldDrinksContainer.appendChild(coldDrinksDiv);

  menuContainer.appendChild(hotDrinksContainer);
  menuContainer.appendChild(coldDrinksContainer);

  aboutPageContainer.appendChild(imageContainer);
  aboutPageContainer.appendChild(menuContainer);

  contentDiv.appendChild(aboutPageContainer);
}

function insertDrinks(source, destination) {
  for (const drinkName in source) {
    const price = source[drinkName];

    const drink = document.createElement("p");
    drink.classList.add('drink');

    const nameText = document.createElement("span");
    nameText.textContent = drinkName;

    const priceText = document.createElement('span');
    priceText.textContent = price;

    drink.appendChild(nameText);
    drink.appendChild(priceText);

    destination.appendChild(drink);
  }

}
