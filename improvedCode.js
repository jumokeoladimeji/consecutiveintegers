const getTrendArray = (integerArray) => {
    for (let i=0; i < integerArray.length; i++) {
        if(integerArray[i] < integerArray[i+1] && integerArray[i+1] < integerArray[i+2]) { 
            console.log(integerArray[i], integerArray[i+1], integerArray[i+2])
          return [true, false, i];
        }
         if(integerArray[i] > integerArray[i+1] && integerArray[i+1] > integerArray[i+2]) { 
             console.log(integerArray[i], integerArray[i+1], integerArray[i+2])
          return [false, true, i];
        }
    }
    return [false, false, -1];
}

console.log('downtrend', getTrendArray([57, 5, 30, 19, 18, 12, 7, 18, 22, 32, 20, 11, 8, 5]));
console.log('uptrend', getTrendArray([32, 5, 11, 7, 8, 10, 11, 18, 5, 2]));
console.log('false', getTrendArray([32, 12, 15, 11, 22, 11, 18, 18, 15, 17]));