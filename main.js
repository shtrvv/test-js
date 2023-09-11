// Ex 1

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArr = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }

//   return newArr;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Ex 2

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let newArr = [];

//   for (i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArr.push(i);
//     }
//   }

//   return newArr;
//     // Change code above this line
//   }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// Ex 3

// function includes(array, value) {
//   // Change code below this line
//     let isContain;
//     for (let i = 0; i < array.length; i += 1) {
//        if (array[i] === value) {
//            isContain = true;
//            break;
//         } else {
//       isContain = false;
//         }
//     }

//   return isContain;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));

// Ex 4

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getProductPrice(productName) {

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }

//   return null;
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// Ex 5

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {

//   const propValues = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//   }

//   return propValues;

// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// Ex 6

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (let product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// const person = {
//   firstName: "John",
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName);

//Ex. 7

// Change code below this line
// function findMatches(firstArr, ...otherArgs) {
//   const matches = []; // Don't change this line

//   for (const arg of otherArgs) {
//     if (firstArr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//Ex. 8

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(item => {
//     if (item % 2 === 0) {
//       newArray.push(item + value);
//     }
//   });

//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(object);
// console.log(object);
// console.log(object);

// const getTotalFriendCount = users => {
//     const friends = users.reduce((total, user) => {
//         total + user.friends;
//         return friends.length;
//     }, 0);
// };

// console.log(getTotalFriendCount(4));