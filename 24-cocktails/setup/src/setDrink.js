const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    // because id is on the parent
    const id = e.target.parentElement.dataset.id;
    // JSON: dont'need to use stringify because it's already a string
    localStorage.setItem('drink', id);
  });
};

export default setDrink;
