const quickSort = (arr)=>{
    if(arr.length <= 1) return arr
    const pivot = arr[Math.floor(Math.random()*arr.length)]
    const left = []
    const right = []
    const equal = []
    for(val of arr){
        if(val < pivot) left.push(val)
        else if(val > pivot) right.push(val)
        else equal.push(val)
    }

    return [...quickSort(left),...equal,...quickSort(right)]

}

console.log(quickSort([5,3,7,6,2,9]))