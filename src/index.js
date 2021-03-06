import './styles/main.scss';

import * as d3 from 'd3';
import 'd3-selection-multi';

import {
  bubbleStep,
  selectStep,
  insertStep,
  shellStep,
} from './stepSort'

import {
  genRandomArray,
  genOrderArray,
  sortTest,
  valToRGB,
  rgbToHex,
  genRandomRGBArray,
} from './utilities'

import {
  coinChange,
  lengthOfLIS,
  wordBreak,
  findMaxForm,
} from './exam/dynamicProgramming'

import {
  cloneGraph,
} from './exam/graph'

const colorBlocks = document.querySelector('.color-blocks');

const drawColorArray = (canvasBlock, arr) => {
  //canvasBlock.innerHTML = '';
  const length = arr.length;
  const maxVal = Math.max(...arr);

  const allColorBlocks = d3.select(canvasBlock).selectAll('.single-block').data(arr);
  allColorBlocks.exit().remove();
  allColorBlocks.enter().append('div').attr('class', 'single-block');

  d3.select(canvasBlock).selectAll('.single-block')
    .attrs({
      style: d => {
        const rgb = valToRGB(d);
        const hex = rgbToHex(rgb);
        const dH = (d/maxVal - 0.5)*100

        const blockW = `${100/length}%`;
        const blockH = `${Math.abs(dH)/2}%`;
        
        return `
          width: ${100/length}%;
          height: ${Math.abs(dH)/2}%;
          background-color: ${hex};
          transform: translate(0, ${dH > 0 ? -50 : 50}%);
        `       
      }
    })
}

//const n = 60
const test1 = genRandomRGBArray(n);
//sortTest(test1, shellSort, 'shell');

let stepTimer

//bubbleStep(test1, () => { drawColorArray(colorBlocks, test1) });
//shellStep(test1, () => { drawColorArray(colorBlocks, test1) }, stepTimer);

const coins = [186,419,83,408];
const amount = 6249;

//const coins = [1,2,3,4];
//const amount = 4;
//console.log(coinChange(coins, amount));

//const list = [10,9,2,5,3,7,101,18]
//const list = [10,9,2,5,3,4]
//const list = [4,10,4,3,8,9]
//console.log(lengthOfLIS(list));

const s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
const wordDict = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa'];

//console.log(wordBreak(s, wordDict));

const node = {"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1}

//console.log(node, cloneGraph(node));

//const strs = ["10", "0001", "111001", "1", "0"];
//const m = 5;
//const n = 3;

const strs = ["0", "0", "1", "1"];
const m = 2;
const n = 2;

console.log(findMaxForm(strs, m, n));
