const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

console.log(btn, result);
btn.addEventListener('click', () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = 'Loading...';

  try {
    const response = await fetch(url, {
      // for documentation
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });

    if (!response.ok) {
      throw new Error('there was an error');
    }

    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    result.textContent = 'There was an error...';
  }
};

fetchDadJoke();
