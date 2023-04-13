function hasTargetSum(array, target) {
  // Write your algorithm here

  // hasTargetSum([array], target);
  // iterate thro each number in array;
  // for a number get a number that adds to the  target(number1+number2=target)
  // if sum adds up to equal target return true
  // if else return false

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  hasTargetSum([array], target);
  iterate thro each number in array;
  for a number get a number that adds to te target(number1+number2=target)
  if sum adds up to equal target return true
  if else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;