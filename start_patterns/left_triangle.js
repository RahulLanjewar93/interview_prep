
// *
// **
// ***
// ****
// *****

const printStar = (n)=>{
    let string = "";
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            string += "*"
        }
        string += "\n"
    }
    return string
}

console.log(printStar(5))