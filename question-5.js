// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(array) {
  // เริ่มเขียนโค้ดตรงนี้
let sum = 0
for (let item of array){
  sum += (item["price"]*item["quantity"])
}
return sum
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];
/* for (let item of cart){
  console.log(item["price"]);
  console.log(item["quantity"]);
  
  
} */
console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
