{
  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }
  f = factorial(20);
  console.log(f);
}

{
  n = 20;
  f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  console.log(f);
}
