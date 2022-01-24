// 0 1 1 2 3 5 8 13

const fibonacci = (n,memo={}) => {
    if(n in memo) return memo[n]
    if(n == 0) return 0
    if(n == 1) return 1

    memo[n] = fibonacci(n-1,memo) + fibonacci(n-2,memo)
    return memo[n]
}
console.log(fibonacci(0)) //0
console.log(fibonacci(1)) //1
console.log(fibonacci(6)) //8
console.log(fibonacci(7)) //13
console.log(fibonacci(15)) //610
console.log(fibonacci(21)) //10946
console.log(fibonacci(40)) //102334155
