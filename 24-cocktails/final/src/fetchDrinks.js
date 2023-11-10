import { showLoading } from './toggleLoading.js';

const fetchDrinks = async (url) => {
  // loading will appear before the data is displayed on the page
  showLoading();

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
