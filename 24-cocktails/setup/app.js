import presentDrinks from './src/presentDrinks.js';
import './src/searchForm.js';

// s = a, cocktails starts with letter a
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
