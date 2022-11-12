add = (a,b) => a+b
subtract = (a,b) => a-b
multiply = (a,b) => a*b
divide = (a,b)=> b>0 ? a/b:'Division not possible'

function calculator(a,op,b){
    if(isNaN(a) || isNaN(b))
        return 'digits Only'
    switch(op){
        case '+':
            ans = add(a,b)
            break;
        case '-':
            ans = subtract(a,b)
            break;
        case '*':
            ans = multiply(a,b)
            break;
        case '/':
            ans = divide(a,b)
            break;
        default:
            ans = 'wrong operator'
    }
    return ans
}

console.log(calculator('a', '/', 3))