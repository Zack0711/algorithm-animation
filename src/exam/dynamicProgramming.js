// Leetcode - 70 Climbing Stairs
const climbStairs = n => {  
  if( n <= 2){
    if(n === 2) return 2;
    if(n === 1) return 1;
    return 0;
  }else{
    const m = [1,2];
    for(let i = 2; i < n; i += 1){
      m[i] = m[i-1] + m[i-2];
    }
    return m[n-1];
  }
};
// Leetcode - 322. Coin Change
const coinChange = (coins, amount) => {
   const count = [0];
   let min = Infinity;
   for(let i = 1; i <= amount; i += 1){
     min = Infinity;
     for(let j = 0; j < coins.length; j += 1){
      if(i - coins[j] >= 0){
        min = Math.min(min, count[i - coins[j]] + 1);
      }
     }
     count[i] = min;
   }
   return count[amount] === Infinity ? -1 : count[amount];
};

//Leetcode - 300 Longest Increasing Subsequence
const lengthOfLIS = nums => {
  if(nums.length === 0) return 0

  const length = [];
  let max = 1;

  for(let i = 0; i < nums.length; i += 1){
    const a = nums[i];
    if(length[i] === undefined) length[i] = 1;
    for(let j = i + 1; j < nums.length; j += 1){
      if(length[j] === undefined) length[j] = 1;
      const b = nums[j];
      if(b > a) length[j] = Math.max(length[j], length[i] + 1, 1);
      max = Math.max(max, length[j])
    }
  }

  return max;


  /*
  if(nums.length === 0) return 0
  const list = [];
  let max = 1;

  for(let i = 0; i < nums.length; i += 1){
    const a = nums[i];
    for(let j = 0; j < list.length; j += 1){
      const b = list[j];
      const last = b[b.length - 1];
      if(a > last) b.push(a);
      if(a < last && b.length > 1 && a > b[b.length - 2]) b[b.length - 1] = a;
      if(b.length > max) max = b.length;
    }
    list[i] = [a];
  }
  return max
  */
};

export {
  climbStairs,
  coinChange,
  lengthOfLIS,
}