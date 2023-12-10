function getArrayParams(...arr) {
  let min = 0;
  let max = 0;
  let sum = 0;

   for (let i = 0; i < arr.length; i++){
   sum += arr[i];
   }
   let avg = parseFloat((sum / arr.length).toFixed(2));
   
   for (let i = 0; i < arr.length; i++){
    max = Math.max(...arr)
    min = Math.min(...arr)
    }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  let difference = 0;

  if(arr.length === 0) 
    return 0;

  for (let i = 0; i < arr.length; i++){
    max = Math.max(...arr)
    min = Math.min(...arr)
    
    difference = max - min;
    return difference;
    }

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if(arr.length === 0) 
  return 0;

  for ( let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
    sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
    }
  let diff = sumEvenElement - sumOddElement;
  return diff;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if(arr.length === 0) 
  return 0;

  for ( let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
    sumEvenElement += arr[i];
    countEvenElement++;
  }
}
  let average = sumEvenElement/countEvenElement;
  return average;

  }

function makeWork (arrOfArr, func) {

  let maxWorkerResult = 0;

  for(let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
}
return maxWorkerResult;
}
