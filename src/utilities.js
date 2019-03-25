export const genRandomArray = N => {
  const result = [];
  for( let i = 0; i < N; i += 1){
    result.push( Math.floor(Math.random() * N) );
  }
  return result;
}

export const genOrderArray = (N, isDesc = false) => {
  const result = [];
  for( let i = 0; i < N; i += 1){
    if(isDesc){
      result.push(N-i)
    }else{
      result.push(i + 1)      
    }
  }
  return result;
}

export const genRandomRGBArray = N => {
  const result = [];
  for( let i = 0; i < N; i += 1){
    const r = Math.floor(Math.random() * 256)*65536;
    const g = Math.floor(Math.random() * 256)*256;
    const b = Math.floor(Math.random() * 256);
    result.push( r+g+b );
  }
  return result;  
}

export const sortTest = (arr, sort, name) => {
  const start = performance.now();
  const result = sort(arr);
  const end = performance.now();
  if(arr.length <= 20){
    console.log(arr, name, end - start, result);
  }else{
    console.log(name, end - start);    
  }
  return end - start;
}

export const valToRGB = val => {
  const R = Math.floor(val/65536);
  const G = Math.floor(val%65536/256);
  const B = Math.floor(val%65536%256);

  return {R, G, B};
}

const to16bit = val => {
  let result = val.toString(16);
  if(result.length < 2) result = 0 + result;
  return result
}

export const rgbToHex = rgb => {
  const hex = `#${to16bit(rgb.R)}${to16bit(rgb.G)}${to16bit(rgb.B)}`
  return hex;
}