const minimumJumps = (arr) => {
    let jumps = 0;
    if(arr.length == 1) return 0
    if(arr[0] == 0 ) return -1
    for(let i=0;i<arr.length;i++){
        let possibleJump = arr[i]
        if(possibleJump == 0 && i != arr.length) return -1
        let farthest  = Math.max(arr.slice(i+1,i+possibleJump+1))
        i=arr.indexOf()
        jumps++

    }
    return jumps
}
console.log(minimumJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))