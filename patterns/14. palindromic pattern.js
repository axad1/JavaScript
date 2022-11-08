//  palindromic pattern
n = 5
for(i=0; i<n; i++){
    for(j=i; j<n-1; j++)
        process.stdout.write(" ")
    for(j=i+1; j>0; j--)
        process.stdout.write(`${j}`)
    for(j=2; j<i+2; j++)
        process.stdout.write(`${j}`)
    console.log()
}