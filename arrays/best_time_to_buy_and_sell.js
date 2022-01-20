const bestTimeToBuyAndSell = (arr)=>{
    let profit =0;
    let buyingPrice = Number.MAX_SAFE_INTEGER
    for(let i=0;i<arr.length;i++){
        if(arr[i] < buyingPrice) {
            buyingPrice = arr[i]
        }
        else if(arr[i]-buyingPrice>profit){
            profit=arr[i]-buyingPrice
        }
    }
    return profit
}

console.log(bestTimeToBuyAndSell([7,2,8,1,3,6,4]))