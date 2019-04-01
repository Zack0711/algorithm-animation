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
//O(N^2)
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
};

// Leetcode - 139 Word Break
const wordBreak = (s, wordDict) => {
  const sBreak = [];
  const wordCompare = (list, wordDict) => {
    const result = {
      list: [],
      wordDict: [],
    }

    const wMap = {}

    for(let i = 0; i < list.length; i += 1){
      const n = list[i];
      for(let j = 0; j < wordDict.length; j += 1){
        const w = wordDict[j];
        const m = n + w.length
        if(w === s.slice(n, m)){
          if(sBreak[m] === undefined){
            sBreak[m] = 1;
            if(m === s.length) return result; 
            result.list.push(m);
          }
        }
        if(m < s.length && wMap[w] === undefined){
          result.wordDict.push(w);
          wMap[w] = 1;
        }
      }
    }
    return result;
  }

  let result = wordCompare([0], wordDict);
  while(result.list.length > 0 && sBreak[s.length] === undefined){
    result = wordCompare(result.list, result.wordDict);
  }
  return sBreak[s.length] ? true : false;
};

// Leetcode - 474. Ones and Zeroes
const findMaxForm = (strs, m, n) => {
  const result = [[[0, {}]]];
  const strsMap = {};

  for(let i = 0; i <= m; i += 1){
    if(result[i] === undefined) result[i] = [];
    for(let j = 0; j <= n; j += 1){
      if(result[i][j] === undefined) result[i][j] = [0, {}];

      let max = result[i][j][0];
      let map = result[i][j][1];

      for(let k = 0; k < strs.length; k += 1){
        const str = strs[k];
        const key = str+k
        if(strsMap[key] === undefined){
          const str_m =  str.replace(/1+/g, '').length;
          const str_n =  str.replace(/0+/g, '').length;
          strsMap[key] = [str_m, str_n]
        }

        const s_m = strsMap[key][0];
        const s_n = strsMap[key][1];

        if( i - s_m >=0 && j - s_n >= 0){
          const prev = result[i - s_m][j - s_n];
          const p_map =  prev[1];
          const p_v = p_map[key] ? prev[0] : prev[0] + 1;

          if(p_v > max){
            const newMap = {};
            newMap[key] = strsMap[key];
            max = p_v;
            map = Object.assign(newMap, p_map);
          }
          result[i][j][0] = max;
          result[i][j][1] = map;
        }
      }
    }
  }
  return result[m][n][0]
};

export {
  climbStairs,
  coinChange,
  lengthOfLIS,
  wordBreak,
  findMaxForm,
}