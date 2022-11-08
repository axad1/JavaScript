//  inverted half pyramid 180 rotated.js
n = 5
for (i = 0; i < n; i++) {
    for (s = i; s < n - 1; s++)
        process.stdout.write(" ")
    for (j = 0; j <= i; j++)
        process.stdout.write("*")
    console.log()
}
