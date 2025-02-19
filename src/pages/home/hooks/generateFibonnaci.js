export const generateFibonnaci = (currentTime) => {
    const { hours, seconds, minutes } = currentTime;
  
    const fibonacciList = [];
  
    fibonacciList.push(seconds);
    fibonacciList.push(minutes);

    if(hours == 0){
      return false;
    } else if(hours == 1){
      return seconds;
    } else if(hours == 2){
      return [seconds, minutes];
    }
  
    for (let i = 0; i < hours - 2; i++) {
      let nextNumber = fibonacciList[i] + fibonacciList[i + 1];
      fibonacciList.push(nextNumber);
    }
  
    return fibonacciList;
  }