const minimumHeight = (arr,k)=>{
    arr.sort((a,b)=>a-b)
    let n = arr.length
    let res = arr[n-1] - arr[0]
    let min = arr[0]+k
    let max = arr[n-1]-k
    for(let i=0;i<n-1;i++){
        max = Math.max(max,arr[i+1]-k)
        min = Math.min(min,arr[i]+k)

        if (min < 0) continue;

        res = Math.min(res,max-min)
    }
    return res
}

console.log(minimumHeight([3, 9, 12, 16, 20],3))