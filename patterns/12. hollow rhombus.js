//  hollow rhombus
n = 20
for(i=0; i<n; i++){
    for(j=i; j<n-1; j++)
        process.stdout.write(" ")
    for(j=0; j<n; j++){
        if(i==0 || j==0 || i==n-1 || j==n-1)
            process.stdout.write("*")
        else
            process.stdout.write(" ")
    }
    console.log()
}