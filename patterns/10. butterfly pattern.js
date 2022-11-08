//  butterfly pattern
n = 10;
for(i=0; i<n; i++){
    for(j=0; j<=i; j++)
        process.stdout.write("*")

    for(j=0; j<(n-i-1)*2; j++)
        process.stdout.write(" ")

    for(j=0; j<=i; j++)
        process.stdout.write("*")
    
    console.log()
}
for(i=0; i<n-1; i++){
    for(j=i; j<n-1; j++)
        process.stdout.write("*")

    for(j=i; j<(i*3)+2; j++)
        process.stdout.write(" ")

    for(j=i; j<n-1; j++)
        process.stdout.write("*")
    
    console.log()
}