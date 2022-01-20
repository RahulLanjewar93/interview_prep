// [1,0,0,1,2,2,1,2] => [0,0,1,1,1,2,2,2]
const swap = (arr,a,b)=>{
    let temp = arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

const zerosOneTwos = (arr)=>{
    let low=0,mid=0,high=arr.length-1;
    while(mid<=high){
        if(arr[mid] == 0){
            swap(arr,mid,low)
            low++
            mid++
        }
        else if(arr[mid]==1){
            mid++
        }
        else {
            swap(arr,high,mid)
            high--
        }
    }
    return arr
}

console.log(zerosOneTwos([0,1,2,0,1,1,2,2,0,0,2,1,2,1]))