function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function rangeArray(start,end,interval) {
    let array = [];

    if (interval === undefined) {
        interval = 1;
    }

    for (let i = start; i < end; i += interval) {
        array.push(i);
    }
    return(array);
}

function shuffle(array) {
    let shuffled = [];
    let startLen = array.length;

    for (let i = 0; i < startLen; i++) {
        let random = randInt(array.length);
        shuffled.push(array.splice(random, 1));
    }
    return(shuffled);
}

function printBars(array, barChar) {
    let bars = array;

    if (barChar === undefined) {
        barChar = '#';
    }

    for (let i = -1; i < bars.length; i++) {
        const bar = bars[i];
        console.log(barChar.repeat(bar));
    }
}

let bars = rangeArray(1,10);
bars = shuffle(bars);
printBars(bars);