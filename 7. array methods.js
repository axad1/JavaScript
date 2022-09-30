//  Methods to implement callback function

//  forEach(value, index, array)
a = [1,2,3,4]
a.forEach(n=> console.log(n*2))

//  map(value, index, array) (returns new array)
square = a.map((n)=> n*n)
console.log(square)

//  filter(value) (returns new array, filter on true/false)
even = a.filter(n => n%2==0)
console.log(even)

//  reduce((previousValue, currentValue)=>{}, initialValue)
sum = a.reduce((previousValue, currentValue) => previousValue+currentValue)
console.log(`sum is ${sum}`)

// example2
cart = [
    {product: "item1", price:200},
    {product: "item2", price:300},
    {product: "item3", price:400}
]

amount = cart.reduce((total, item)=> item.price+total, 0)
console.log(`amount = ${amount}`)
