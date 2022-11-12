text = '{"name":"Asad", "birth":"1986-09-12"}';

obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

console.log(obj)