const jobScheduling = (arr)=>{
    arr.sort((a,b)=>b[2]-a[2])

    const sequence = [];
    for(let i=0;i<arr.length;i++){
        sequence[i]=-1
    }
    console.log(arr)
    let profit =0,count=0;
    for(let i=0;i<arr.length;i++){
        for(j=arr[i][1];j>0;j--){
            if(sequence[j-1]==-1){
                sequence[j-1]=arr[i][0]
                profit += arr[i][2]
                count++
                break;
            }
        }
    }
    return {"Job Sequence":sequence,"Count":count,"Profit":profit}
}


const input = [[1,2,100],[2,1,19],[3,2,27],[4,1,25],[5,1,15]]
console.log(jobScheduling(input))