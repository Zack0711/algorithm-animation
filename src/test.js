import {
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort,
  shellSort,
  quickSort,
  InPlaceQuickSort,
} from './sort'


const genArray = N => {
  const result = [];
  for( let i = 0; i < N; i += 1){
    result.push( Math.floor(Math.random() * N * 1000) );
  }
  return result;
}

const time = {
  merge: 0,
  shell: 0,
//  quick: 0,
  inPlace: 0,
}

const sortTest = (arr, sort, name) => {
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

const n = 10;
const m = 1000;

for(let i = 0; i < n; i +=1){
  const arr = genArray(m);
  if(arr.length <= 20){
    console.log(arr);
  }
  time['merge'] += sortTest(arr, mergeSort, 'merge');
  time['shell'] += sortTest(arr, shellSort, 'shell');
//  time['quick'] += sortTest(arr, quickSort, 'quick');
  time['inPlace'] += sortTest(arr, InPlaceQuickSort, 'inPlace')
}

time['merge'] = time['merge']/n;
time['shell'] = time['shell']/n;
//time['quick'] = time['quick']/n;
time['inPlace'] = time['inPlace']/n;

console.log(time);