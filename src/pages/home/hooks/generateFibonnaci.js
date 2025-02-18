export const generateFibonnaci = (currentTime) => {
    const { hours, seconds, minutes } = currentTime;
  
    const fibonacciList = [];
  
    fibonacciList.push(seconds);
    fibonacciList.push(minutes);
  
    for (let i = 0; i < hours - 2; i++) {
      let nextNumber = fibonacciList[i] + fibonacciList[i + 1];
      fibonacciList.push(nextNumber);
    }
  
    console.log(fibonacciList);
  }