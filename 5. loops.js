// for - loops through a block of code a number of times
for(let i=0; i<5; i++){}

// -------------

// for/in or index loop - loops through the properties of an object
person = {name:"John", age:25};
for (let x in person){
    person[x]
}

// Do not use for in over an Array if the index order is important.
numbers = [1, 2, 3, 4, 5]
for (let x in numbers){
    numbers[x]
}

// ----------------

// for/of - loops through the values of an iterable object
for (let n of numbers){}

// ----------------

/* Array.forEach() - calls a function once for each array element
that the function takes 3 arguments: value, index, array itself. */
numbers.forEach((value, index, array)=>{})

// ----------------

// while - loops through a block of code while a specified condition is true
while(true){break}

// ----------------

// do/while - also loops through a block of code while a specified condition is true
do{
    break
}while(true)