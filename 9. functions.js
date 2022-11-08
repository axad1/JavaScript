//  Function declaration    (support hoisting)
function happy(){
    console.log("happy birthday to you")
}

//  Function Expression
happy = function(){
    console.log("happy birthday")
}

//  Arrow Function
happy = () => console.log("happy!")


//  Default Parameters
function add(a=0, b=0){}

//  Rest Parameters as array
function add(a, b, ...rest){}


//  parameter destructuring
function print({name}){
    console.log(name)
}

person = {
    name: "Asad",
    age: "12"
}
print(person)

//  ----------------

//  higher order function (function returning function)
function ok(){
    return ()=>console.log("higher function")
}
fun = ok()
fun();

//  ----------------

//  function are objects as well that have many properties

//  name property will give the name of function
happy.name

//  we can also add our own properties to functions
happy.myOwnProperty = "very unique value"
happy.myOwnProperty

//  functions also provide prototype property so we can add our properties
happy.prototype