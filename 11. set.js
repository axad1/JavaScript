/*
Set(iterable)
unique items only (no duplicate)
no index-based access (order is not guaranteed)
set have it's own methods
it does not have length property
but can be used with for-of loop
*/
set = new Set([1,2,3,4,5])

set.add(6)

//  has(value) (return boolean)
set.has(5)

//  for-of loop
for(s of set)
    console.log(s)

// convert to array
a = Array.from(set)
a = [...set]
a = forEach((n,i,set)=>a.push(n))


//  type-check
typeof(set)
set instanceof(Set)