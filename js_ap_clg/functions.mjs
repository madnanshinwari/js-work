function myfunction() {
  //  console.log(" i love javascript");
}
myfunction();

// parameter and arguments
function sum(x, y) {
  // parameter is local variables
  // parameter
  let s = x + y;
  // console.log(x);
  return s;
}
// let val = sum(3, 5); // arguments
// console.log(val);

//-------------- Arrow function ----------------\\

const Arrowsum = (x, y) => {
  console.log(x + y);
};

Arrowsum(3, 8);
let hello = () => console.log("hello"); // arrow function in single line
hello();

//---------------practice quesions ---------//

function countVowel(str) {
  let count = 0;
  for (let char of str) {
    if (
      char == "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

countVowel("islamiacollege");
