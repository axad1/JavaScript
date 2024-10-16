function counter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
}

c = counter();
c.increment();
c.increment();
c.increment();
c.increment();
c.decrement();

ans = c.getCount();
console.log(ans);
