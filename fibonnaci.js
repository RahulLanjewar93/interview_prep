// const fibonacci = (end)=>{
//     const sequence = [0,1]
//     for(let i=2;i<end;i++){
//         sequence[i] = sequence[i-1]+sequence[i-2]
//     }
//     return sequence
// }

const fibonacci = (data) => {
    let a=0,b=1;
    for(let i=0;i<data;i++){
        let result = a+b;
        let temp = b;
        b=a;
        a=temp
        console.log(result)
    }
}

let input = 10
console.log(fibonacci(input))