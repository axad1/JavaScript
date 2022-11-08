//  Callback is just function returning function
//  Methods to implement callback function

//  forEach(callback(value, index, array))
a = [1,2,3,4]
a.forEach(n=> console.log(n*2))

//  map(callback(value, index, array)) (returns new array)
square = a.map((n)=> n*n)
console.log(square)

//  filter(callback(value)) (returns new array, filter on true/false)
even = a.filter(n => n%2==0)
console.log(even)

//  reduce(callback(total, currentValue)=>{}, initialValue)
sum = a.reduce((total, currentValue) => total+currentValue)
console.log(`sum is ${sum}`)

// example2
cart = [
    {product: "item1", price:200},
    {product: "item2", price:300},
    {product: "item3", price:400}
]

amount = cart.reduce((total, item)=> item.price+total, 0)
console.log(`amount = ${amount}`)

//  ---------------

//  sort(callback(a,b))    (sort as string)
a = [9,5,1200,400,3]
a.sort((a,b)=> a-b)

//  find(callback(value, index, array))    (return search results on true/false)
result = cart.find(item => item.price == 300)
console.log(result)

//  every(callback)     (return true/false)
a = [1,3,5,7]
ans = a.every(n => n%2!=0)
console.log("all elements are odd: ", ans)

//  some(callback)      (return true/false)
even = a.some(n => n%2==0)
console.log(`it has atleast one even num : `, even)

//  fill(value, startIndex, endIndex)
newArray = new Array(10).fill(0)
console.log(newArray)

//  splice(start, count)    delete/insert (return deleted item)
delItem = newArray.splice(2, 3);
newArray.splice(2, 0, "new item")
console.log(newArray)
