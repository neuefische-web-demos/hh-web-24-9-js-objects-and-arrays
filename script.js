// ARRAYS

// Declaring an array
// const arrayName = [item1, item2, item3, ...]

const shoppingList = ["apple", "tomato"];
console.log(shoppingList);

// Accessing array element via bracket notation and the item's index
console.log(shoppingList[0]);
console.log(shoppingList[1]);

// Getting the length of an array
console.log(shoppingList.length);

// Nesting array in another array
const complexArray = [1, 2, ["hello", false], true];

// Accessing element in nested array
console.log(complexArray[2][1]);

// Manipulating arrays

// Overwrite value in array
shoppingList[0] = "banana";
console.log(shoppingList);

// Append data to end of array
shoppingList.push("orange");
console.log(shoppingList);

// Remove data from the end of array
shoppingList.pop();
console.log(shoppingList);

// OBJECTS

// Declaring an object
// const objectName = { key1: value1, key2: value2, ...}

const person = {
  name: "Max Blub",
  age: 21,
  isStudent: false,
};

// Accessing property via dot notation
console.log(person.name);
console.log(person.age);

// Accessing property via bracket notation
console.log(person["name"]);

// Nesting object in another object
const newPerson = {
  name: "Max Blub",
  age: 21,
  isStudent: false,
  address: {
    street: "Berliner Str.",
    houseNumber: 42,
    city: "Leipzig",
    zipCode: "12345",
  },
};

// Accessing property in nested object
console.log(newPerson.address.street);
console.log(newPerson["address"]["houseNumber"]);

// Manipulating objects

// Overwrite existing property
newPerson.name = "Max Bla";
console.log(newPerson.name);

// Add new property
newPerson.score = 15;
console.log(newPerson);

// Delete property
delete newPerson.score;
console.log(newPerson);

// Nested objects and arrays
const people = [
  { name: "John", age: 22 },
  { name: "Alex", age: 33 },
];

const user = {
  userId: "1234",
  mail: "test@mail.com",
  shoppingCart: ["tomato", "banana", "chocolate"],
};

console.log(people[1].name);
console.log(user.shoppingCart[0]);
