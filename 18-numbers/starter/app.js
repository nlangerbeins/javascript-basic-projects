const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initial = 0;

  const increaseCount = setInterval(() => {
    initial += increment;

    if (initial > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = initial;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
