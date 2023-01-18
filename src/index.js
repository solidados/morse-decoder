const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',

    decode: (expr) => {
        let arr = [];
        let phrase = [];

        for(let i = 0; i < expr.length; i += 10){
            let letter = expr.slice(i, i + 10);
            arr.push(letter);
        }

        arr.forEach(element => {
            let word = element.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
            word == '**********' ? phrase.push(' ') : phrase.push(MORSE_TABLE[word]);
        });

        return phrase.join('');
    }
};

// world
// .-- --- .-. .-..  -..
// 0000101111 0000111111 0000101110 0010111010 0000111010

// 101111 111111 101110 101110 10111010 111010

// console.log(MORSE_TABLE.decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));

module.exports = {
    decode: MORSE_TABLE.decode,
};