import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  // for the case when user opens directly drink.html for the first time. There will be no items in local storage (id = undefined), nothing to display and on the page will be only loading indicator.
  if (!id) {
    window.location.replace('index.html');
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

window.addEventListener('DOMContentLoaded', presentDrink);
