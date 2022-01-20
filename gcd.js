const gcd =(input1,input2)=>{
    let commonDivisor = -1
    for(let i=1;i<=Math.min(input1,input2);i++){
        if(input1%i==0 && input2%i==0){
            commonDivisor=i
        }
    }
    return commonDivisor
}

console.log(gcd(98 ,56))