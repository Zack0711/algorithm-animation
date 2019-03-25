const intergerArrange = val => {
  let valString = val.toString().split('');
  let zeroIndex = valString.indexOf('0');

  const countPermutation = str =>{
    const digitData = {};
    const digitArray = [];

    let r = 1;

    for(let i = 0; i < str.length; i += 1){
      const a = parseInt(str[i]);
      if(!digitData[a]){
        digitData[a] = 1;
        digitArray.push(a);
      }else{
        digitData[a] += 1;      
      }
      r = r * ( i + 1) / digitData[a];
    }

    return r;

  }

  let result = countPermutation(valString);
  if(zeroIndex > -1){
    const tmp = valString[0];
    valString[0] = valString[zeroIndex];
    valString[zeroIndex] = tmp;
    result = result - countPermutation(valString.slice(1))
  }

  return result;
}

const stringPermutation = str => {
 const results = [];

  if (str.length === 1) {
    results.push(str);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    var firstChar = str[i];
    var charsLeft = str.substring(0, i) + str.substring(i + 1);
    var innerPermutations = stringPermutation(charsLeft);

//    console.log(innerPermutations)

    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

export {
  intergerArrange,
  stringPermutation,
}