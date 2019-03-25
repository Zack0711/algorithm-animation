// Leetcode Sum of Two Integers
const getSum = (a, b) => {
  let c;

  while(b != 0){
    c = a & b;
    a = a ^ b;
    b = c << 1;
  }

  return a;
}

// Leetcode Hamming weight
const hammingWeight = n => {
  return n.toString(2).split('').filter( d => d === '1').length;
};

// Leetcode Counting Bits
const countBits = num => {
  const result = [0];
  for(let i = 1; i <= num; i += 1){
    result.push(i.toString(2).split('').filter( d => d === '1').length);
  }
  return result;
};

// Leetcode Missing Number
const missingNumber = function(nums) {
  const max = nums.length;
  let result = (1 + max)*max/2;
  for(let i = 0; i < nums.length; i += 1){
    result -= [nums[i]];
  }
  return result;
};

export {
  getSum,
  hammingWeight,
  countBits,
}