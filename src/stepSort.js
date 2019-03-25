// Bubble Sort
const bubbleStep = (arr, stepCall, stepTimer, interval = 100) => {
  let i = 0;
  let j = 0;

  const stepSort = () => {
    clearTimeout(stepTimer);
    let needCallStep = false;
    if(arr[j] > arr[j+1]){
      const tmp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = tmp;
      needCallStep = true;
    }

    j += 1;

    if(j >= arr.length - 1 - i){
      i += 1;
      j = 0;
    }

    if(i < arr.length - 1){
      if(needCallStep){
        stepCall();
        stepTimer = setTimeout( ()=>{ stepSort(); }, interval);
      }else{
        stepSort();
      }
    }
  }

  stepSort();
}

// Selection Sort
const selectStep = (arr, stepCall, stepTimer, interval = 100) => {
  let i = 0;
  let j = i + 1;
  let min = i;
  let temp = arr[i];

  const stepSort = () => {
    clearTimeout(stepTimer);
    let needCallStep = false;

    if(arr[j] < arr[min]) min = j;

    if(j + 1 >= arr.length ){

      if(min > i){
        arr[i] = arr[min];
        arr[min] = temp;
        needCallStep = true;       
      }

      i += 1;
      j = i + 1;
      min = i;
      temp = arr[i];
    }else{
      j += 1;
    }

    if(i < arr.length){
      if(needCallStep){
        stepCall();
        stepTimer = setTimeout( ()=>{ stepSort(); }, interval);
      }else{
        stepSort();
      }
    }
  }

  stepSort();
}

//Insertion Sort 
const insertStep = (arr, stepCall, stepTimer, interval = 100) => {
  let i = 1;
  let j = 0;

  const stepSort = () => {
    clearTimeout(stepTimer);
    let needCallStep = false;

    if(arr[i] < arr[j]){
      arr.splice(j, 0, arr[i]);
      arr.splice(i+1, 1);
      needCallStep = true;
      j = i; //break loop
    }

    j += 1;
    if(j >= i){
      i += 1;
      j = 0;
    }

    if(i <= arr.length){
      if(needCallStep){
        stepCall();
        stepTimer = setTimeout( ()=>{ stepSort(); }, interval);
      }else{
        stepSort();
      }      
    }
  }

  stepSort();
}

//Shell Sort
const shellStep = (arr, stepCall, stepTimer, interval = 100) => {
  let dx = Math.floor(arr.length/2);
  let i = 0;
  let j = i + dx;
  let k = j;
  let base = arr[k];

  const stepSort = () => {
    clearTimeout(stepTimer);
    let needCallStep = false;

    if(k > i && base < arr[k - dx]){
      needCallStep = true;
      arr[k] = arr[k - dx];
      k -= dx;
    }else{
      needCallStep = true;

      arr[k] = base;

      j += dx;
      if(j >= arr.length){
        i += 1
        if(i >= dx){
          dx = dx = Math.floor(dx/2);
          i = 0;
        }
        j = i + dx;
      }
      k = j; 
      base = arr[k];           
    }
    if(dx > 0){
      if(needCallStep){
        stepCall();
        stepTimer = setTimeout( ()=>{ stepSort(); }, interval);
      }else{
        stepSort();
      }
    }

  }

  stepSort();
}

export {
  bubbleStep,
  selectStep,
  insertStep,
  shellStep,
}