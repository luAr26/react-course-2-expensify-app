// Object destructuring

// const person = {
//   name: "Raul",
//   age: 33,
//   location: {
//     city: "Deva",
//     temperature: 18
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temperature: temp } = person.location;

// if (city && temp) {
//   console.log(`It's ${temp} degrees in ${city}.`);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147"
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, , mediumPrice] = item;

console.log(`A Medium ${itemName} costs ${mediumPrice}.`);
