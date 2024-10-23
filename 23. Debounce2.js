const debounce = (func, delay) => {
  let t;
  return (e) => {
    clearTimeout(t);
    t = setTimeout(() => func(e), delay);
  };
};

const handleChange = (e) => console.log("change", e.value);
let change = debounce(handleChange, 3000);
