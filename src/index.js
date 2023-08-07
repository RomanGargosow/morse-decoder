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
};

function decode(expr) {
  // write your solution here
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    const letterMorse = expr.slice(i, i + 10);
    if (letterMorse === '**********') {
      result += ' ';
    } else {
      const morseCode = letterMorse
        .replace(/00/g, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-');
      result += MORSE_TABLE[morseCode];
    }
  }
  return result;
}

module.exports = {
  decode,
};
