const printDuplicateCount = (str)=>{
    let stringArr = str.split("")
    let dict = {}
    for(let char of stringArr){
        if(char in dict) dict[char] += 1
        else dict[char] = 1
    }

    for(char in dict) dict[char] > 1 ? console.log(char + ":" + dict[char]) : null;
    return null;
}

printDuplicateCount('test string')