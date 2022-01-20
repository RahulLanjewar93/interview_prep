Array.prototype.swap = (a,b)=>{
    console.log(this)
    let temp = this[a]
    this[a] = this[b]
    this[b] = temp
    return this
}

const bubbleSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i] > arr[i+1]) {
                console.log('swapping')
                arr.swap(i,i+1)
            }
        }
    }
    return arr
}


console.log(bubbleSort([22,1,16,8,4,99]))