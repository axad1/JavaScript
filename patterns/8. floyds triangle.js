//  floyds triangle
n=4, x=1
for(i=0; i<n; i++){
    for(j=0; j<=i; j++)
        process.stdout.write(`${x++}`)
    console.log()
}