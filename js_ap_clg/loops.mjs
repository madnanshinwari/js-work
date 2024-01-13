// for loop
// for (let i = 1; i <= 5; i++) {
//   console.log("testing");
// }
// console.log("statement after loop ");

// sum through the loop
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
//   console.log("sum is ", sum);
// }

/* while loop  */
// let i = 1;
// while (i <= 5) {
//   console.log("i is :", i);
//   i++;
// }

/*   do-while loop */
// let i = 20;
// do {
//   console.log("testing "); // at least 1 time print
//   i++;
// } while (i < 10); // condition is false

/* for-of loop: use for array and string */

// let str = "islamiaColloge";
// let size = 0;
// for (let i of str) {
//   console.log("characters  is : ", i);
//   size++;
// }
// console.log("the size is : ", size);

/*  for-in loop :   used for the objects */

// let students = {
//   name: "Dawood ",
//   age: 20,
//   cgpa: 3.5,
//   address: "malakand ",
// };
// for (let key in students) {
//   console.log(key, students[key]);
//

/*   pracitce questions */
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 == 0) {
//     console.log("even is : ", num);
//   }
// }

/*   question no 2 */
// guess number game
let guessNum = 20;
let userNum = prompt("guess the number ");
while (guessNum != userNum) {
  userNum = prompt("wrong number! guess again....");
}
console.log("congrulation! you have guess the right number ");
