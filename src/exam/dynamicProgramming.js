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

export {
  climbStairs,
}