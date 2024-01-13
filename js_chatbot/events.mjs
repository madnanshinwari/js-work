// function myftn() {
//   alert("hi i'm abdul haq");
// }

// function add(a, b) {
//   document.write("the sum of two numbers is ", a + b);
// }
// function sub(a, b) {
//   document.write(`the subtraction  of ${a} and ${b} is: ${a - b}`);
// }

// function add_tasks() {
//   newtask = prompt("Add  A new Tasks");
// }

function findsum(arr) {
  var sum = 0;
  for (let a = 0; a < arr.length; a++) {
    sum += arr[a];
  }
  document.write(`the sum of the ${arr} is : ${sum}`);
}
