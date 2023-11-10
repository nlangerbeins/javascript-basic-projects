import get from './utils/getElement.js';
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');
// transform nodelist into a proper array

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);

  // display user, setting up buttons
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
