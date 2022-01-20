
const binarySearch = (arr,n)=>{
    let mid = Math.floor(arr.length/2)

    if(arr[mid] == n) return `Element ${n} found at index ${mid}`
    else if(arr[mid] > n) return binarySearch(arr.slice(0,mid),n)
    else if(arr[mid] < n) return binarySearch(arr.slice(mid,arr.length),n)
    else if(mid == 0) return 'Element not found'
}

console.log(binarySearch([1,5,10,12,56,63],56))