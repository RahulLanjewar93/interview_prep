const insertionSort = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i])
        for (let j = i; j >= 0; j--) {
            if (result[j]<result[j-1]) {
                [result[j],result[j-1]] = [result[j-1],result[j]]
            }else{
                break;
            }
        }
    }
    return result;
}

console.log(insertionSort([38, 27, 43, 3, 9, 82, 10]))