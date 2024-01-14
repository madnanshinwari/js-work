const product = {
  productName: "Apple",
  productPrice: 100,
  productQuantity: 2,
  productTotal: 200,
  productId: 1,
};
// console.log(product.productName);

// Opreation on Objects //
/*
     Access properties  
       - one by one
       - loop through whole Objects
     Update properties
     Delete properties
     Add properties

*/
// update on object properties
product.productName = "Orange";
console.log(product.productName);
console.log(product);
// delete properties

delete product.productPrice;
//  Add properties
product.productColor = "white";

// looping and  Object properties
/*     via for in loop */
for (let key in product) {
  console.log(key, product[key]);
  if (key != "productTotal") {
    console.log(`${key}: ${product[key]}`);
  }
}
