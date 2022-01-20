const primeNumber = (numberToCheck) => {
    let flag = true
    for(let i=1;i<numberToCheck;i++){
        if( i == 1) continue
        if(numberToCheck%i == 0) {
            flag = false
            break
        }
    }
    return flag
}
console.log(primeNumber(4))