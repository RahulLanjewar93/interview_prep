const firstAndLastOccurence = (arr,element) =>{
    let first,last;
    for(let i=0;i< arr.length;i++){
        if(arr[i] == element){
            if(!first) first = i
            else last = i
        }
    }
    return [first,last]
}

console.log(firstAndLastOccurence([ 1, 3, 5, 5, 5, 5, 67, 123, 125],5))