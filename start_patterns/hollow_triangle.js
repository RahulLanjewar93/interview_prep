
// *
// **
// * *
// *  *
// *   *
// ******


const printStar = (n)=>{
    let string = "";
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            if(i == 1 || i ==n){
                string += "*"
            }
            else{
                if(j==1 || j==i){
                    string += "*"
                }
                else {
                    string += " "
                }
            }
        }
        string += "\n"
    }
    return string
}

console.log(printStar(6))