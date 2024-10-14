// fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

{
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

{
  n = 10;
  f = [0, 1];
  for (let i = 1; i < n; i++) f.push(f[i] + f[i - 1]);
  console.log(f);
}

{
  function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  n = 10;
  f = [];
  for (let i = 0; i < n; i++) {
    f.push(fibonacci(i));
  }
  console.log(f);
}
