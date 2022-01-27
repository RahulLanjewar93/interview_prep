const countAndSay = (str)=>{
    str = str.split("")
    let previous = str[0]
    let counter = 0;
    let result = []
    for(let i=1;i<str.length;i++) {
        current = Number(i)
        if (str[i] === str [previous]){
            counter++
            previous=i
        }else{
            result.push(" "+counter+(i-1)+" ")
        }
    }
    return [...result]
}

console.log(countAndSay("3322251"))