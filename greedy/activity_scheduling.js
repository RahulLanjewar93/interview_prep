//start[] = {1,3,0,5,8,5}
//end[] =  {2,4,6,7,9,9}

const activityScheduling = (startArr,endArr)=>{
    // Sort the array according to the end times
    let activityArr = []
    for(let i=0;i<startArr.length;i++){
        activityArr.push([startArr[i],endArr[i]])
    }
    activityArr.sort((a,b)=>a[1]-b[1])


    // An axuilary array to keep track of done activiti  B es by default select first activity becuase it has the lowest end time
    let activitiesDone = [activityArr[0]]

    // Go through every activity and push if feasible
    for(let j=1;j<activityArr.length-1;j++){

        // Check if the start of current element is greater than than the end time of completed activities array
        if(activityArr[j][0] > activitiesDone[activitiesDone.length-1][1]){
            console.log('push')
            activitiesDone.push(activityArr[j])
        }
    }
    return activitiesDone
}

console.log(activityScheduling([10,12,20],[20,25,30]))