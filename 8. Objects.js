/*
    objects are referenced type
    objects store key value pairs
    objects don't have index
    keys are always in strings

*/


key = "gender"
value = "male"

person = {
    name : "Asad",
    age : 24,
    //  computed values
    [key] : value
}


//  access
for(p in person){
    p, ':', person[p]
}

//  array of keys
Object.keys(person)

//  ------------------

//  clone objects
obj1 = {
    key1 : "value1",
    key2 : "value2"
}

obj2 = {
    key3 : "value1",
    key4 : "value2"
}

//  spread operator
obj3 = {...obj1, ...obj1, key69: "value69"}

//  old method using assign
obj4 = Object.assign({}, obj1)

//  ----------------

//  spread string into object
newobj = {..."Hello"}

//  spread array into object
newobj = {...["asad", "ali"]}

//  -----------------

//  object destructuring

//  variable with key names
var {name, age, ...rest} = person
//  variable with different names
var {name: pname, age: year, ...rest} = person

//  -----------------

//  objects inside array
users = [
    {id: 1, name: 'asad'},
    {id: 2, name: 'shaheen'},
    {id: 3, name: 'maira'}
]

for(user of users)
    user.name

//  ----------------

//  nested destructuring
var [user1, user2] = users
var [{id}, , {name}] = users
var [{name: myname}] = users
var [{name: myname, id}] = users

//  ----------------

//  parameter destructuring
function print({name, age}){
    console.log(name, age)
}
print(person)

//  -----------------

//  optional chaining
person?.address

//  -----------------

//  method (function inside objects)
person.about = function(){
    console.log(`hi i'm ${this.name}`)
}
person.about()