const factorial = (data)=>{
    if(data == 1) return 1
    let result = data*factorial(data-1)
    return result
}

let input = 5
console.log(factorial(input))