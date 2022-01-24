const subsetSum = (arr)=>{
    let result = [0]
    for(let i=0;i<arr.length;i++){
        result.push(arr[i])

        for(let j=i+1;j<arr.length;j++){
            console.log(arr[i]+arr[j])
            result.push(arr[i]+arr[j])
        }
    }
    return result.sort((a,b)=>a-b)
}

console.log(subsetSum([5,2,1]))