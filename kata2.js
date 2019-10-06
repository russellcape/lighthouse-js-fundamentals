const conditionalSum = function(values, condition) {
let sum = 0
let check = ["even", "odd"]
values.forEach(function(i) {
  if (check[i % 2] == condition) {
      sum += i;
      }
    })
  return sum
  }


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
