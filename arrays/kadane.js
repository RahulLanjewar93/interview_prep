const kadaneAlgo = (arr)=>{
    let max = Number.MIN_SAFE_INTEGER;
    let pointer = 0;
    for(let i=0;i<arr.length;i++){
        pointer += arr[i]
        if(pointer > max) max = pointer
        if(pointer < 0 ) pointer =0
    }
    return max

}

console.log(kadaneAlgo([1,2,3,-2,5]))