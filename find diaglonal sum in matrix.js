const arr = [
  11, 2, 4,
  4,  5, 6,
  10, 8, 12
];

let left_sum = (right_sum = 0);

for (let i = 0; i < 3; i++) left_sum += arr[i * 3 + i]
for (let i = 2; i >= 0; i--) right_sum += arr[i * 3 + (2 - i) ]


console.log(left_sum);
console.log(right_sum);

/*
2 -> 2 * 3 + (2 - 2) = 6
1 -> 1 * 3 + (2 - 1) = 4
0 -> 0 * 3 + (2 - 0) = 2
*/