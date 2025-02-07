const numArr=[2,3,5,7,1,8,9,4,6];
const processData=(numArr,callbackF)=>{
    return callbackF(numArr);
}

function filterOdd(numArr) {
    return numArr.filter(num => num % 2 !== 0);
}

function doubleNumbers(numArr) {
    return numArr.map(num => num * 2);
}

function calculateSum(numArr) {
    return numArr.reduce((sum, num) => sum + num, 0);
}


function findMax(numbers) {
    return Math.max(...numArr);
}


console.log("Odd numbers:", processData(numArr, filterOdd));
console.log("Doubled numbers:", processData(numArr, doubleNumbers));
console.log("Sum of numbers:", processData(numArr, calculateSum));
console.log("Maximum number:", processData(numArr, findMax));