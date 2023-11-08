const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');

// get data, fetch data, return data + loading
const fetchProducts = async () => {
  // loading
  productsDOM.innerHTML = '<div class="loading"></div>';
  // get data from api
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data; // Promise as a result
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};

// display list item
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      // objects destructuring
      const { id } = product;
      // name - old name, title - new one
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;

      // id, name, price, img
      //in href id will be added to redirect to a product page (?id=${id})
      return `<a href="product.html?id=${id}" class="single-product">
            <img src="${img}" alt="${title}" class="single-product-img img" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join('');
  // display products on the page
  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
