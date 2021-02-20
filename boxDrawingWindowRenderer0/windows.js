const WIND = document.getElementById("sandbox");
const CANV = document.getElementById("window");
const CTX = CANV.getContext("2d");
const SCALE = 50;
var win = [
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
];

// function render(array) {
//     return array.join("\n").replace(/\,/g, "")
// }
// /**
//  *
//  * @param {string} Pre-formatted string of zeroes and
//  * @param {element} wind
//  */
// function update(rendered, wind) {
//   wind.innerText = render(rendered);
// }

function renderCanvas(array, canv, scale) {
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === 1) {
        canv.fillRect(
          (i + i * (i > 0)) * scale,
          j * scale,
          (i + 1 * (i>0)) * scale,
          (j + 1) * scale
        );
      }
    }
  }
}

renderCanvas(win, CTX, SCALE);
