const url = 'https://randomuser.me/api/';

const getUser = async () => {
  const resp = await fetch(url);
  const data = await resp.json();

  // destructuring
  const person = data.results[0];
  //   console.log(person);
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first: firstName, last: lastName } = person.name;
  const { age } = person.dob;
  const {
    street: { number, name },
  } = person.location;

  // phone: phone, email: email - should match data-label in index.html
  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${firstName} ${lastName}`,
  };
};

export default getUser;
