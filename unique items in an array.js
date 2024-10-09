a = [1, 2, 3, 1, 2, 4, 5];

{
  u = [...new Set(a)];
  console.log(u);
}

{
  u = [];
  for (let i = 0; i < a.length; i++) if (!u.includes(a[i])) u.push(a[i]);
  console.log(u);
}

{
  u = a.filter((v, i, self) => self.indexOf(v) === i);
  console.log(u);
}

{
  u = a.reduce((p, v) => (p.includes(v) ? p : [...p, v]), []);
  console.log(u);
}

{
  obj = {};
  a.forEach((v) => (obj[v] = true));
  u = Object.keys(obj).map(Number);
  console.log(u);
}

{
  obj = a.reduce((p, v) => ({ ...p, [v]: true }), {});
  u = Object.keys(obj).map(Number);
  console.log(u);
}

{
  obj = a.reduce((p, v) => ({ ...p, [v]: true }), {});
  u = Object.keys(obj).map(Number);
  console.log(u);
}

