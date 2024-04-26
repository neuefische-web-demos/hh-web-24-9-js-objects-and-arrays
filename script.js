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

// Manipulation Arrays

// Overwrite value in array
shoppingList[0] = "banana";
console.log(shoppingList);

// Append data to end of array
shoppingList.push("orange");
console.log(shoppingList);

// Remove data from the end of array
shoppingList.pop();
console.log(shoppingList);
