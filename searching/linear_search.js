const linearSearch = (arr,n)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] == n){
            return `Element ${n} found at index ${i}`
        }
    }
    return "Element not found"
}

console.log(linearSearch([11,5,2,9,23,6,8],8))