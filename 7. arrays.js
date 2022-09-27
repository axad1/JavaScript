// Array is reference datatype
Array.isArray([])

// create array via constructor
a = Array()
a = []

// Methods
a.push("one")       //  insert at last
a.pop()             //  remove from last

a.unshift("one")    //  insert at start
a.shift()           //  remove from start

//  clone array
a2 = a.slice(0)
a3 = Array().concat(a)
a4 = [].concat(a)
a5 = [...a]         //  new way via spread operator
a5 = [...a, 'new']


//  Array Destructuring (let or var or const is needed here)
let [var1, var2,  , ...rest] = a;


// length
console.log(a.length)