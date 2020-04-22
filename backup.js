/**
 * 
 * 
let toCalculate = (arr, opearator) => {
    if (opearator === '+') {
      let summ = 0;
      arr.forEach((it) => {
        summ += Number(it);
      })
      return summ;
    } else if (opearator === '-') {
      let summ = Number(arr[0]);
      console.log(summ);
      for (let i = 1; i < arr.length; i++) {
        summ -= arr[i];
      }
      return summ;
    } else if (opearator === '*') {
      let summ = Number(arr[0]);
      console.log(summ);
      for (let i = 1; i < arr.length; i++) {
        summ *= arr[i];
      }
      return summ;
    } else if (opearator === '/') {
      let summ = Number(arr[0]);
      console.log(summ);
      for (let i = 1; i < arr.length; i++) {
        summ /= arr[i];
      }
      return summ;
    }
  }
 
*/
