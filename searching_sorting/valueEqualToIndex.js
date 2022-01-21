const valueEqualToIndex = (arr) =>{
    const result = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] == i+1){
            result.push(i+1)
        }
    }
    return result
}

console.log(valueEqualToIndex([15, 2, 45, 12, 7]))
