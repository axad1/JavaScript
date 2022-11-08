//  inverted half pyramid with numbers
n = 5
for(i=0; i<n; i++){
    for(j=0; j<n-i; j++)
        process.stdout.write(`${j+1}`)
    console.log()
}