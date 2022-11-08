//  binary triangle
n = 100
for(i=0; i<n; i++){
    for(j=0; j<=i; j++)
        if((i+j)%2 == 0)
            process.stdout.write("1")
        else
            process.stdout.write("0")
    console.log()
}