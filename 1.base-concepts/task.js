"use strict"
function solveEquation(a, b, c) {
  const arr = [];
  const d = b * b - 4 * a * c;
  if (d > 0){
    const x1 = (-b + Math.sqrt(d))/ (2*a);
    const x2 = (-b - Math.sqrt(d))/ (2*a);
    arr.push(x1);
    arr.push(x2);
  }else if (d === 0) {
    const x = -b/(2*a);
    arr.push(x);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

   percent = +percent;
   contribution = +contribution;
   amount = +amount;
   countMonths = +countMonths;

   let  P = (percent / 100) / 12;                
   let  S =  amount - contribution;             
   let  n = countMonths;                         


   let payment = S * (P + (P / (((1 + P) ** n) - 1)));
   let totalAmount = (payment * n).toFixed(2);
   console.log(totalAmount);
   return +totalAmount;
}
