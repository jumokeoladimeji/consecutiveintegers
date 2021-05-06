const getTrendArray = (integerArray) => {
    let countUp = 0;
    let countDown = 0;
    let previousInteger = integerArray[0];
    let firstTrendIndex = -1;
    let uptrend = false;
    let downtrend = false;

    for (let i=1; i < integerArray.length; i++) {
        if(previousInteger < integerArray[i]) { 
            countUp++;
            countDown = 0;
            uptrend =  true;
            downtrend = false;
            firstTrendIndex = (countUp === 1) ? i : firstTrendIndex;
        }
        if(previousInteger > integerArray[i]) {
            countDown++;
            countUp = 0;
            downtrend = true;
            uptrend = false;
            firstTrendIndex = (countDown === 1) ? i : firstTrendIndex;
        }
        if (countDown === 3 || countUp === 3) {
          return [uptrend, downtrend, firstTrendIndex];
        }
        previousInteger = integerArray[i];

    }
    if(countUp !== 3 && countDown !== 3){
          firstTrendIndex = -1
    }
    return [uptrend, downtrend, firstTrendIndex];
}

console.log('downtrend', getTrendArray([57, 5, 30, 19, 18, 12, 7, 18, 22, 32, 20, 11, 8, 5]));
console.log('uptrend', getTrendArray([32, 5, 11, 7, 8, 10, 11, 18, 5, 2]));
console.log('false', getTrendArray([32, 12, 15, 11, 22, 11, 18, 18, 15, 7]));