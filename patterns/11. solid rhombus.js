//  solid rhombus
n = 5
for(i=0; i<n; i++){
    for(j=i; j<n-1; j++)
        process.stdout.write(" ")
    for(j=0; j<n; j++)
        process.stdout.write("*")
    console.log()
}