// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory["apple"]["quantity"] = 200

inventory["orange"] = {}
inventory["orange"]["price"] = 20
inventory["orange"]["quantity"] = 300

//console.log(inventory.apple.price);

/////////////////////////////////////////////////////////////////////////////////////

function converToArray (para,obj){
  let check = []
  for (let item in obj){
    check.push(obj[item][para])
  }
return check
}
let   priceList = converToArray("price",inventory)
console.log( priceList);

let quantityList =converToArray("quantity",inventory)
console.log(quantityList);
/////////////////////////////////////////////////////////////////////////////////////

let result = 0
for (let i=0; i<priceList.length; i++){
  result += (priceList[i]*quantityList[i])
}

console.log(result);
/////////////////////////////////////////////////////////////////////////////////////

let message = `Total inventory value: ${result} baht`
console.log(message);







