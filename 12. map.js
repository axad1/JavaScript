/*
Map object (key value pairs)
keys can be of any data type

*/

//  create
person = new Map()

//  set data
person.set("firstname", "asad")
person.set(1, "12")
person.set(true, false)

//  get data
person.get("firstname")
person.get(1)
person.get(true)

//  get keys (it is iterable can be used with for-of)
person.keys()

for(key of person.keys())
    console.log(key, person.get(key))

//  --------------

person1 = {
    id : 1,
    name : 'asad' 
}
person2 = {
    id : 2,
    name: 'ali'
}

info = new Map()
info.set(person1, {age:18, gender: "male"})
info.set(person2, {age:20, gender: "male"})

console.log(person1.name, info.get(person1).age)