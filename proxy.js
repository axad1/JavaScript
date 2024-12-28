const target = { name: "Asad" };
const handler = {
  get: (obj, prop) => {
    console.log("Accessed property", prop);
    return prop in obj ? obj[prop] : "Not found";
  },
};

const proxy = new Proxy(target, handler);

const result = proxy.name;

console.log("result => ", result);
