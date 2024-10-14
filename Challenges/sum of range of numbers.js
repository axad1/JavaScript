// linear time
n = 5;
sum = 0;
for (let i = 1; i <= n; i++) sum += i;
console.log(sum);

// constant time
sum = (n * (n + 1)) / 2;
console.log(sum);
