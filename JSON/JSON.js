// JavaScript Object Notation

obj = {
    "name" : "Asad",
    age : 18
}

// JSON to string
str = JSON.stringify(obj)

// str = JSON.stringify(obj,callback,spaces)
// ie. JSON.stringify(obj, undefined, 4)

// use filter result
str = JSON.stringify(obj, ['name'])

// ---------------

// JSON to object
obj = JSON.parse(str)



/* --------------
Invalid Data types
a function
a date
undefined

Exceptions

-----------
Parsing Dates
Date objects are not allowed in JSON.
If you need to include a date, write it as a string.
You can convert it back into a date object later

-----------
Parsing Functions
Functions are not allowed in JSON.
If you need to include a function, write it as a string.
You can convert it back into a function later.
You should avoid using functions in JSON,
the functions will lose their scope,
and you would have to use eval() to convert them back into functions.

*/