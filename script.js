// Arrays

// Declaring and reading from Arrays
// Index                  0        1
const shoppingList = ["apple", "tomato"];
console.log(shoppingList);

// Bracket notation
console.log(shoppingList[0]);
console.log(shoppingList[1]);

// Length
console.log(shoppingList.length);

// Complex array
const complexArray = [1, 2, ["hello", false], true];

console.log(complexArray[2][1]);

// Manipulation Arrays (mutable)
shoppingList[0] = "banana";
console.log(shoppingList);

// push() - adds one or more elements to the end of the array
shoppingList.push("orange");
console.log(shoppingList);

// pop() - remove last element from array
shoppingList.pop();
console.log(shoppingList);
