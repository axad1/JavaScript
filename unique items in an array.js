a = [1, 2, 3, 1, 2, 4, 5];

// find unique items in the array with XOR
{
  //  with XOR  works only if exactly one number appears once and all others appear exactly twice.
  let a = [1, 2, 3, 4, 3, 2, 1];
  let unique;
  for (let n of a) unique = unique ^ n;
  console.log("Unique with xor => ", unique);
}

{
  let unique;
  for (let n of a) {
    if (a.filter((v) => v === n).length === 1) {
      unique = n;
      break;
    }
  }
  console.log("Unique item", unique);
}

// REMOVE UNIQUE ITEMS

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
