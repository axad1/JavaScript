//  fill(value, startIndex, endIndex)
newArray = new Array(10).fill(0)

newArray = new Array(10).fill(0).map((_, i) => i);

newArray = [...new Array(10)].map((_, i) => i);

newArray = Array.from({length: 10}, () => Math.floor(Math.random() * 39));

newArray = Array.from({ length: 10 }, (_, i) => i);

console.log(newArray);
