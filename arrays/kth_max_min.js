
const kth_max_min = (arr,k)=>{
    k -= 1;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return [arr[k],arr[arr.length-1-k]];
}

console.log(kth_max_min([12,23,4,521,2,42,9,123,12,55,23,9,0,23,1,3,4,5,6,2,24232,23],2))