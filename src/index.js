const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrOfSymbols = [],
        beggining = 0,
        ending = 10,
        splitedArrayOfSymbols = [],
        arr3 = [],
        arr,
        morseSymbolsArray = [],
        resultArray = [];
    function splitting(expr) {
        arrOfSymbols.push(expr.slice(beggining, ending));
        if (ending !== expr.length) {
            beggining = beggining + 10;
            ending = ending + 10;
            splitting(expr);
        }
    }
    splitting(expr);
    arrOfSymbols.forEach((item) => {
        splitedArrayOfSymbols.push(item.split(''));
    });
    splitedArrayOfSymbols.forEach((item, i) => {
        arr = item;
        arr.forEach((item, i) => {
            if ((item == 1) && (arr[i+1] == 0)) {
                arr3.push('.');
            } else if ((item == 1) && (arr[i+1] == 1)) {
                arr3.push('-');
                arr[i+1] = 0;
            } else if (item == '*') {
                arr3.push(' ');
                arr.splice(i, 10);
            }
        });
        morseSymbolsArray.push(arr3.join(''));
        arr3 = [];
    });
    morseSymbolsArray.forEach((item, i) => {
        if (item == ' ') {
            resultArray.push(' ');
        } else {
            resultArray.push(MORSE_TABLE[item]);
        }
    });
    return resultArray.join('');
}

module.exports = {
    decode
}
