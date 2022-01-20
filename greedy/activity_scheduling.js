//start[] = {1,3,0,5,8,5}
//end[] =  {2,4,6,7,9,9}

const activityScheduling = (startArr,endArr)=>{
    let activityArr = []
    for(let i=0;i<startArr.length;i++){
        activityArr.push([startArr[i],endArr[i]])
    }
    activityArr.sort((a,b)=>a[1]-b[1])
    console.log('actibiiaklonsdk',activityArr)
    let activitiesDone = []
    for(let j=0;j<activityArr.length-1;j++){
        console.log('act arr',activityArr[j],activityArr[j+1])
        if(activityArr[j][1] < activityArr[j+1][0]){
            console.log({a:activityArr[j][1],b:activityArr[j+1][0]})
            activitiesDone.push(j)
        }
    }
    return activitiesDone
}

console.log(activityScheduling([1,3,0,5,8,5],[2,4,6,7,9,9]))