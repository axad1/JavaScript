const people = [
  {
    name: "Kyle",
    age: 28,
  },
  {
    name: "Sally",
    age: 45,
  },
  {
    name: "John",
    age: 43,
  },
  {
    name: "Sally",
    age: 28,
  },
];

{
  // manually
  const g = people.reduce((group, person) => {
    if (!group[person.name]) group[person.name] = [];
    group[person.name].push(person);
    return group;
  }, {});

  console.log(g);
}

{
  // new built-in method starts from node 21
  const g = Object.groupBy(people, (person) => person.name);
  console.log(g);
}
