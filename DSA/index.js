/* reverse arrayigufc
function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4]));
*/

/* max min in array 
function maxMin(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min];
}
console.log(maxMin([1, 2, 3, 4, -5, 0]));
*/

/* two sum 
function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) 
    return [map.get(diff), i];

    map.set(nums[i], i);
  }
}

console.log(twoSum([3, 8, 6, 5], 11));
*/



/* palindrome check */
function isPalindrome(s){
    return s === s.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("NAAN"));
console.log(isPalindrome("hello"));

/* frequency count
function freq(arr){
    let map = new Map();
    for (let num of arr){
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map;
}

console.log(freq([1, 2, 2, 3, 3, 3]));
console.log(Object.fromEntries(freq([1, 2, 2, 3, 3, 3])));
*/

/* missing number 
function missingNumber(arr, n){
    let total = n * (n + 1) / 2;
    let sum = arr.reduce((a, b) => a + b, 0);
    return total - sum;
}
console.log(missingNumber([1, 2, 4, 5], 5));
*/


