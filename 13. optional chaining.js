/*
	Optional Property Access Operator ?.
	Optional Array Element Access Operator .?
	Optional Call Operator .?
*/

user = {
  firstname: "asad",
  // address: { house: 1234 },
};

console.log(user?.address);

// --------------------

// Optional chaining with array (Important)

// const arr = [1, 2, 3];
const arr = null;

console.log(arr?.[0]); // .? is valid with array also

// --------------------

// Optional call to function (Important)

const fun = null; // works with null & undefined only
fun?.();
