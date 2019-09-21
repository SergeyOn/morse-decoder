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

const reverse = str => str.split('').reverse().join(''); //helper function

function decode(expr) {
    let result = ''; // result sentence ex: hello world
    for (let i = 9, length = expr.length; i < length; i += 10) { // cycle for 10 symbols = 1 letter
        let letter = ''; // letter in code ex: ..-., but in reverse order
        for (let j = i; j !== i-10; j -= 2 ) { //cycle code from the end
            if (expr[j-1] === '0' || expr[j] === '*') break; // 00 or 'space'
           
            if (expr[j] === '1' && expr[j-1] === '1' ) {
                letter += '-';
            } else {
                letter += '.';
            }
        }
        
        if (!letter) {
          result += ' '; //add space
        } else {
          result += MORSE_TABLE[reverse(letter)]; // add reversed letter-code from table
        }
    }
    return result;
}

module.exports = {
    decode
}