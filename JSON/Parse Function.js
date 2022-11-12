// simple solution is to wrap the function in round brackets () and use eval function
//or
// put round brackets in the eval function
text = '{"name":"Asad", "age":"function(){return 30;}"}';

obj = JSON.parse(text);

console.log(obj)

obj.age = eval('(' + obj.age + ')');

console.log(obj.age())