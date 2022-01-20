const cyclicallyRotate = (arr)=>{
    let temp =arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--){
        if(i == 0){

            arr[i] = temp
        }else{
            arr[i]=arr[i-1]
        }
    }
    return arr;
}

console.log(cyclicallyRotate([9, 8, 7, 6, 4, 2, 1, 3]))