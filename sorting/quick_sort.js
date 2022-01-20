// [5,3,7,6,2,9]

// PIVOT = 7
//
Array.prototype.swap = function(a,b){
    let temp = this[a]
    this[a]=this[b]
    this[b]=temp

    return this
}
const partition = (arr,left,right)=>{
    console.log({arr,left,right})
    let pivot = arr[Math.floor((left+right)/2)]
    console.log('pivot is ',pivot)
    while(left <= right){
    console.log('iinene while')
        while(arr[left] < pivot ) left++
        while (arr[right] > pivot ) right--
        if(left <= right){
            arr.swap(left,right)
            left++
            right--
        }
    }
    return left
}

const quickSort = (arr,left,right)=>{
    if(arr.length == 1) return arr
    let index = partition(arr,left,right)
    quickSort(arr,left,index)
    quickSort(arr,index+1,right)
    return arr
}


console.log(quickSort([5,3,7,6,2,9],0,6))