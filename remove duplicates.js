a = [2,4,2,3,3,2,5,1]

// Amazing logic
uniqueArray = a.filter((item, index, self) => self.indexOf(item) == index)


// best method using Set
function remove(a){
    a.splice(0, a.length, ...new Set(a))
}

//  remove duplicate items via 2 for-loops
function remove2(a){
    for(i=0; i<a.length; i++){
        for(j=i+1; j<a.length; j++){
            if(a[i]==a[j]){
                a.splice(j, 1);
            }
        }
    }
}

//  remove duplicate items via includes also sorts
function remove3(a){
    b = [...a]
    for(i=0; i<a.length; i++){
        if(a.includes(a[i+1])){
            last = a.splice(i,1)
        }
    }
    a.unshift(...last)
}


remove3(a)
console.log(a)

