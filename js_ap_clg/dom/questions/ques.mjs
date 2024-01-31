// ============== question 1 =============
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "From Apna college ";

//================ question 2 ============
let divs = document.querySelectorAll(".box");
// divs[0].innerText = "hello 1";
// divs[1].innerText = "hello 2";
// divs[2].innerText = "hello 3";

//======= or use the for loop from question 2 =======
let idx = 1;
for (div of divs) {
  div.innerText = `new uniques values${idx}`;
  idx++;
}
