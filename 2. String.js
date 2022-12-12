// Strings are immutable (cannot change) all functions returns new string

s = "  Asad  "

// length
s.length

// trim white spaces
s.trim()

// upper
s.toUpperCase()
// lower
s.toLowerCase()

// slice
s.slice(3,5)

// split(separator, [optional] limit)
// splits the string into substrings whenever a separator is found, and returns an array of those substrings
a = s.split(" ")

// capitalize
a.map(s=>{return (s.charAt(0)).toUpperCase()+s.slice(1)})
a.map(s=>{return (s.charAt(0)).toUpperCase()+s.substring(1)})



// concatenate
"hello" + "world"
// concatenate str to num
+"12"  +  +"15"


// template string using back ticks
`hi my name is ${s}`


// -------------- typecast
// number to string
console.log(typeof(22 + ""))
console.log(typeof(String(22)))

// string to number
console.log(typeof(+ "22"))
console.log(typeof(Number("22")))


// array to string
arr.join()
a.toString()