//  number pyramid
n = 9
for(i=0; i<n; i++){
    for(j=i; j<n-1; j++)
        process.stdout.write(" ")
    for(j=0; j<=i; j++)
        process.stdout.write(`${i+1} `)
    console.log()
}