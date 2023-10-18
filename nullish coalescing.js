// Falsy (undefined, null, '', false, 0 )

a = undefined || 99; // -> 99
a = null || 99; // -> 99
a = false || 99; // -> 99
a = "" || 99; // -> 99
a = 0 || 99; // -> 0

a = undefined ?? 99; // -> 99
a = null ?? 99; // -> 99
a = false ?? 99; // -> false
a = "" ?? 99; // -> ""
a = 0 ?? 99; // -> 0

console.log(a);
