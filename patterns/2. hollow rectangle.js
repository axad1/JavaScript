//  hollow rectangle
n = 5
for(i=0; i<n; i++){
    for(j=0, k=n*3; j<k; j++){
        if(i==0 || j==0 || j==k-1 || i==n-1)
            process.stdout.write("*")
        else
            process.stdout.write(" ")
    }
    console.log()
}