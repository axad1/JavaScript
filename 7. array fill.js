//  fill(value, startIndex, endIndex)
a = new Array(10).fill(0)

a = new Array(10).fill(0).map((_, i) => i);

a = [...new Array(10)].map((_, i) => i);

a = Array.from({ length: 10 }, (_, i) => i);

a = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20)); // 0 - 19
a = Array.from({ length: 10 }, () => Math.ceil(Math.random() * 20));  // 1 - 20

console.log(a);
