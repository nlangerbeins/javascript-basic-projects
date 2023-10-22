// constructor
function Counter(element, value) {}

// increase
Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};

// decrease
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

// reset
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check ${selector} selector, no such element exists`
    );
  }
}
