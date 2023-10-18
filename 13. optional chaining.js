user = {
  firstname: "asad",
  // address : {house: 1234}
};

console.log(user?.address);

// --------------------

// Optional chaining with array (Important)

// const arr = [1, 2, 3];
const arr = null;

console.log(arr?.[0]); // .? is valid with array also
