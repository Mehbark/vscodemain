function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randItem(array) {
  return array[randInt(array.length - 1)];
}

let words = [
  ["hello", "hi"],
  ["world", "there"],
];
let punct = [", ", " ", "; ", ": "];
let outp = "";

for (let i = 0; i < words.length; i++) {
  let word = randItem(words[i]);
  let punc = randItem(punct);

  outp += word;
  outp += punc;
}
console.log(outp);
