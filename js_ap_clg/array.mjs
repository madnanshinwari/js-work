// let students = ["ali", "yousaf", "fahad", "adnan", "mansoor", "sheikh"];
// console.log(students);
// console.log(students.length);

// let marks = [23, 45, 56, 76, 34];
// console.log(marks);

// students[1] = "pathan ";
// console.log(students[4]);

/* for loop  */
// for (let idx = 0; idx < students.length; idx++) {
//   console.log(students[idx]);
// }

/* for of loop */
// for (let stud of students) {
//   console.log(stud);
// }

/* practice question */
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let mark of marks) {
//   sum = sum + mark;
// }
// console.log(sum);
// let avarge = sum / 6;
// console.log("the avarge is ", avarge);

// let foodItems = ["chips", "potato", "chicken", "burger", "Apple"];
// let sportsItems = ["bat ", "football", "ball ", "shoes", "shirt"];

// let newitems = foodItems.push("orange");
// console.log(foodItems);

//console.log(foodItems.toString());

// shift method
// let val = foodItems.shift(); // shift delete value from ist index
// console.log(val);

// unshift method
// let addItem = foodItems.unshift("Mango"); //  unshift add value form ist index in array
// console.log(addItem);

//  concat method
// let combineArray = foodItems.concat(sportsItems);
// console.log(combineArray);

// slice method
// let sliceItems = foodItems.slice(1, 4);
// console.log(sliceItems);

// splice method
// let spliceItems = sportsItems.splice(1, 3, 4);
// console.log(spliceItem);

//----------------- practice question ----------------- //

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

let removeItem = companies.shift();
console.log(removeItem);

let newitems = companies.splice(2, 1, "Ola");
console.log(newitems);

let addItem = companies.push("Amazon");
console.log(companies);
