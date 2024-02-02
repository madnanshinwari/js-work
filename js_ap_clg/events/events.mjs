//let btn = document.querySelector("#btn");
btn.onclick = () => {
  console.log("btn clicked JS ");
  let a = 29;
  a++;
  console.log(a);
};
// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("mouse hover!");
// };
// btn.onclick = (evt) => {  // event object
//   console.log(evt);
//   console.log(evt.type); // show the type of event
// };

btn.addEventListener("click", () => {
  console.log("button clicked in event addEventListener");
});

btn.addEventListener("click", (evt) => {
  console.log(evt);
});
