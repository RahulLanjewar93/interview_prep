/*

*/
const minimumTimeToCompleteTask = (processors,tasks)=>{
    processors.sort((a,b)=>a-b)
    tasks.sort((a,b)=>b-a)

    let totalTime = []
    for(let i=0;i<processors.length;i++){
        totalTime.push([])
    }

    let count = 0;
    let result = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<processors.length;i++){
        for(let j=0;j<4;j++){
            totalTime[i][j] = processors[i] + tasks[count]
            result = Math.max(result,totalTime[i][j])
            count++
        }
    }
    return result
}

console.log(minimumTimeToCompleteTask([8,10],[3,1,8,7,4,2,5,2]))