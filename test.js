const str = "hello !@#$%^WORLD?123.";
const noSpecialCharacters = str.replace(/[\W\d]/gi, "");
console.log(noSpecialCharacters); // 'hello WORLD'
