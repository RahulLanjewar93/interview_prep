/*

Find the first non duplicate letter in a string

*/

const firstNonDuplicateCharacter = (str) => {
    let obj = {}
    str = str.split("")
    for(let i=0;i<str.length;i++){
        if(str[i] in obj){
            let character = str[i]
            console.log(character,obj.character)
        }
        else {
            obj[`${str[i]}`] = {count:0}
        }
        console.log(obj)
    }
    return obj
}

console.log(firstNonDuplicateCharacter('statistics'))