const countSquares = (number) => {
    const sqrt  = Math.sqrt(number)
    const result = []
    for(let i=1;i<sqrt;i++){
        result.push(i*i)
    }
    return result
}
console.log(countSquares(9))