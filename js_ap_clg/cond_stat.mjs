/*  if statement */
// let age = 16;
// if (age > 18) {
//   console.log("vote");
// } else {
//   console.log("not vote your age is less then 18 ");
// }

/* else-if  statement */

// let mode = "blue";
// let color;
// if (mode === "black") {
//   color = "dark";
// } else if (mode === "light ") {
//   color = "white";
// } else if (mode === " blue") {
//   color = "blue ";
// } else {
//   console.log("invalide mode ");
// }

// console.log(color);

/*   Ternary operator  ? */

// let age = 23;
// let result = age > 18 ? "adult" : " not adult"; // simple  if else
// console.log(result);

/*  practice questions */

// let num = prompt("Enter the enter ");
// if (num % 5 === 0) {
//   console.log(num, "number is multiply of 5 ");
// } else {
//   console.log(num, " number is not multiply of  5 ");
// }

let scores = prompt("Enter your marks ");
let grade;

if (scores >= 90 && scores <= 100) {
  grade = " A ";
} else if (scores >= 70 && scores <= 89) {
  grade = " B ";
} else if (scores >= 60 && scores <= 69) {
  grade = " C ";
} else if (scores >= 50 && scores <= 59) {
  grade = " D ";
} else if (scores >= 0 && scores <= 49) {
  grade = " F  ";
}
console.log("your grade is : ", grade);
