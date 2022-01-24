// 5 3 4

const canSum = (target,arr,memo={})=>{
    if(target in memo) return memo[target]
    if(target === 0) return true
    if(target < 0) return false
    for(let values of arr){
        let remainder = target-values
        if(canSum(remainder,arr,memo) === true) {
            memo[target] = true
            return true
        }
    }

    memo[target] = false
    return false
}

console.log(canSum(12,[6,2]))