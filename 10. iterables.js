/*
array and strings are iterable
objects are not iterable
iterables are those on which for-of loop works
and that have length property
objects are not iterable
other iterables...
*/

/*
Set(any iterable)
unique items only (no duplicate)
no index-based access (order is not guaranteed)
set have it's own methods
it does not have length property
but can be used with for-of loop
*/
set = new Set([1,2,3])
set.add(4)

//  boolean has(value)
set.has(5)

//  ----------------

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

// for(key of person.keys())
console.log(person.get(a))
// console.log(person)