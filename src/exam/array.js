// leetcode two-sum
const twoSum = (nums, target) => {
  const map = {};
  for(let i = 0; i < nums.length; i += 1){
    const v = nums[i]
    if(map[target - v] >= 0){
      return [map[target - v], i];
    }
    map[v] = i;
}
};
// leetcode Best Time to Buy and Sell Stock.
const maxProfit = prices => {
    const length = prices.length;

    let profit = 0;
    let maxPrice = 0;
    
    for(let i = length - 1; i > 0; i -= 1){
        if(prices[i] > maxPrice) maxPrice = prices[i];
        if(maxPrice - prices[i-1] > profit) profit = maxPrice - prices[i-1];
    }
    return profit;
};