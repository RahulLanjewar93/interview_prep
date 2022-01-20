const merge = (arr1,arr2) => {
    let leftEl = 0,rightEl=0;
    let result = []
    while(leftEl < arr1.length && rightEl < arr2.length){
        if(arr1[leftEl]<arr2[rightEl]){
            result.push(arr1[leftEl])
            leftEl++
        }else{
            result.push(arr2[rightEl])
            rightEl++
        }
    }

    return [...result,...arr1.slice(leftEl),...arr2.slice(rightEl)]
}

const mergeSort = (arr)=>{
    if(arr.length <= 1 ) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]))