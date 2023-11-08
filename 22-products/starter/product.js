const productDOM = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';

    // get an unique id
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

    //we add to url unique id of every product (?id=${id})
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<h4 class="product-loading">Error. Try again later..</h4>';
  }
};

// display every rpoduct
const displayProduct = (product) => {
  console.log(product);

  // cimpany, colors, description, name:title, price, image (url:img)
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;

  const { url: img } = image[0];
  // change title of every page danymically
  document.title = title.toUpperCase();

  // colors
  console.log(colors);
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

  productDOM.innerHTML = `<div class="product-wrapper">
        <img src="${img}" alt="${title}" class="img" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            suscipit modi praesentium saepe temporibus. Repellat porro suscipit
            ex quis quam architecto ipsam voluptatum repudiandae velit quas? Qui
            assumenda eligendi a.
          </p>
          <button class="btn">add to cart</button>
        </div>
      </div>`;
  return;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
