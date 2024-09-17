// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderList) {
  // เริ่มเขียนโค้ดที่นี่
let text
if (orderList >= 4000 ){
  return text = "Shipping is free"
} else if (orderList >= 2000){
return text = "Shipping cost is 250 bath"
}else {
  text = "Shipping cost is 500 bath"
}
return text 

}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
