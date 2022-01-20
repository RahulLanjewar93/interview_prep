const fibonacci = (n)=>{
    if( n<= 2 ) return  1
    return fibonacci(n-2)+fibonacci(n-1)
}

// const fibonacci = (data) => {
//     let a=0,b=1;
//     for(let i=0;i<data;i++){
//         let result = a+b;
//         let temp = b;
//         b=a;
//         a=temp
//         console.log(result)
//     }
// }

console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(50))