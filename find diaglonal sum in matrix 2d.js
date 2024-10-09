const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, 12],
];

let left_sum = 0,
  right_sum = 0;
arr.forEach((a, i) => {
  left_sum += a[i];
  right_sum += a[a.length - 1 - i];
});

console.log(left_sum);
console.log(right_sum);

const ans = Math.abs(left_sum - right_sum);
