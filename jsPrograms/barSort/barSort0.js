const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
;
var array = rangeArray(1, 501);

/**
 * Returns a random integer
 * @param {number} max The maximum value that will be returned
 * @returns {number} A random number from 0 to max
 */

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Returns an array with numbers from start to end, increasing by interval every time 
 * @param {number} start The first number in the generated list
 * @param {number} end The last number in the generated list
 * @param {number} [interval] The amount that each element in the generated list should increase by, defaults to 1
 * @returns {Array} 
 */

function rangeArray(start, end, interval) {
  let array = [];

  if (interval === undefined) {
    interval = 1;
  }

  for (let i = start; i < end; i += interval) {
    array.push(i);
  }
  return array;
}

function shuffle(array) {
  let shuffled = [];
  let startLen = array.length;

  for (let i = 0; i < startLen; i++) {
    let random = randInt(array.length);
    shuffled.push(array.splice(random, 1));
  }
  return shuffled;
}

function printBars(array, barChar) {
  let bars = array;

  if (barChar === undefined) {
    barChar = "#";
  }

  for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];
    console.log(barChar.repeat(bar));
  }
}

function displayBars(array, color) {
  const barWidth = Math.floor(canvas.width / array.length);
  const segHeight = Math.floor(canvas.height / Math.max(...array));
  console.log(barWidth, segHeight);

  if (color === undefined) {
    color = "white";
  }
  ctx.fillStyle = color;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < array.length; i++) {
    const bar = array[i];
    ctx.fillRect(
      barWidth * i,
      canvas.height - segHeight * bar,
      barWidth,
      segHeight * bar
    );
  }
}

function testShuffleBias(tests) {
  let stats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < tests; i++) {
    let bars = rangeArray(1, 11);
    bars = shuffle(bars);
    stats[bars[0] - 1]++;
  }
  for (let i = 0; i < stats.length; i++) {
    const picked = stats[i];
    console.log(i + 1 + ": %" + tests / picked);
  }
  return stats;
}

//https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
function bubble_Sort(a) {
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i] > x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  displayBars(x);
  } while (swapp);
  return x;
}

//testShuffleBias(10000);
// printBars(rangeArray(1,10));
rangeArray()//