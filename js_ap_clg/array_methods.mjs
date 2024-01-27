let arr = ["sheikh", "khan", "irfan", "ilyas"];
arr.forEach((val, idx, arr) => {
  // forEach use three parameter value, index and array
  console.log(val.toUpperCase(), idx, arr);
});

// ----------- practice questions -----------//

let arrSquare = [2, 3, 4, 5, 6, 7];
arrSquare.forEach((val) => {
  let result = val * val;
  console.log(result);
});

// map -> perform a operation on array elements store to new array
let Arr = [34, 44, 33, 64, 77];
let newArr = Arr.map((val) => {
  return val * val;
});

console.log(newArr);

// filter -> create a new array check the condition
let condArr = Arr.filter((val) => {
  return val > 40;
});

console.log(condArr);

// reduce -> perform some opreations and reduce  a array to  single value.
let num = [1, 2, 3, 4, 5];
let newNum = num.reduce((prev, curr) => {
  return prev + curr;
});
console.log(newNum);

//____________________________ parctice questions _____________________________//

let std_marks = [45, 98, 95, 78, 87, 93];
let result = std_marks.filter((val) => {
  return val > 90;
});
console.log(result);

//-------------- qno2 ---------------//
let n = prompt("Enter the number");
let Array = [];
for (let i = 1; i <= n; i++) {
  Array[i - 1] = i;
}

console.log(Array);

let sumArray = Array.reduce((prev, curr) => {
  return prev + curr;
});
console.log(`sum of the array is: ${sumArray}`);

let factorial = Array.reduce((prev, curr) => {
  return prev * curr;
});
console.log(`factorial of the array is: ${factorial}`);
