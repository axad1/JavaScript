//  inverted half pyramid
n = 5
for (i = 0; i < n; i++) {
    for (j = i; j < n; j++)
        process.stdout.write("*")
    console.log()
}