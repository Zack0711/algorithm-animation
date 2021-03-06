// Bubble Sort
const bubbleSort = arr => {
  for(let i = 0; i < arr.length - 1; i += 1){
    for(let j = 0; j < arr.length - 1 - i; j +=1 ){
      if(arr[j] > arr[j+1]){
        const tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
  return arr;
}

// Selection Sort
const selectSort = arr => {
  for(let i = 0; i < arr.length; i += 1){
    let min = i;
    let temp = arr[i];
    for(let j = i + 1; j < arr.length; j += 1){
      if(arr[j] < min) min = j;
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

//Insertion Sort 
const insertSort = arr => {
  for(let i = 1; i < arr.length; i += 1){
    for(let j = 0; j < i; j += 1){
      if(arr[i] < arr[j]){
        arr.splice(j, 0, arr[i]);
        arr.splice(i+1, 1);
        break;
      }
    }
  }
  return arr;
}

//Merge Sort
const merge = (left, right) => {
  const result = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());      
    }
  }
  return result.concat(left, right);
}

const mergeSort = arr => {
  if(arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

//Shell Sort
const shellSort = arr => {
  for(let dx = Math.floor(arr.length/2); dx > 0; dx = Math.floor(dx/2)){
    for(let i = 0; i < dx; i += 1){
      for(let j = i + dx; j < arr.length; j += dx){
        let k = j

        const base = arr[k];
        while(k > i && base < arr[k - dx]) {
          arr[k] = arr[k - dx];
          k -= dx;
        }
        arr[k] = base;

      }
    }
  }
  return arr;
}

//Quick Sort
const quickSort = arr => {
  if(arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i += 1){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);      
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

//In-place Quick Sort
const _inPlaceQuickSort = (arr, left, right) => {
  if(left >= right) { return arr; }

  const base = arr[left];
  let i = left;
  let j = right;
  while(i < j){
    while(i < j && arr[j] >= base){ 
      j-= 1; 
    }
    arr[i] = arr[j];
    while(i < j && arr[i] <= base){
     i+= 1; 
    }
    arr[j] = arr[i];
  }
  arr[i] = base;

  arr = _inPlaceQuickSort(arr, left, i-1);
  arr = _inPlaceQuickSort(arr, i+1, right);

  return arr;
}

const InPlaceQuickSort = arr => {
  return _inPlaceQuickSort(arr, 0, arr.length - 1);
}

export {
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort,
  shellSort,
  quickSort,
  InPlaceQuickSort,
}