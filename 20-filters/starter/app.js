let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  // if statement
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return `<article class="product" data-id="${id}">
          <img
            src="${image}"
            alt="${title}"
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}$</span>
          </footer>
        </article>`;
    })
    .join('');
};

displayProducts();

// Text filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });

  displayProducts();
});

// Display filter buttons
const companiesDOM = document.querySelector('.companies');
const displayButtons = () => {
  const buttons = ['all', ...new Set(products.map((btn) => btn.company))];
  companiesDOM.innerHTML = buttons
    .map((btn) => {
      return `<button class="company-btn" data-id="${btn}">${btn}</button>`;
    })
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((btn) => {
        return btn.company === el.dataset.id;
      });
    }

    searchInput.value = '';
    displayProducts();
  }
});
