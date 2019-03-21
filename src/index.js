import {
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort,
  shellSort,  
  quickSort,
} from './sort'


const genArray = N => {
  const result = [];
  for( let i = 0; i < N; i += 1){
    result.push( Math.floor(Math.random() * N) );
  }
  return result;
}

const arr1 = genArray(10);

const sortTest = (arr, sort, name) => {
  const start = performance.now();
  const result = sort(arr);
  const end = performance.now();
  console.log(name, end - start, result);
  //console.log(name, end - start);
}

//console.log(arr1);

//sortTest(arr1, bubbleSort, 'bubble')
//sortTest(arr1, selectSort, 'select')
//sortTest(arr1, insertSort, 'insert')
sortTest(arr1, mergeSort, 'merge')
sortTest(arr1, shellSort, 'shell')
sortTest(arr1, quickSort, 'quick')
