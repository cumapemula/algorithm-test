// Soal :
// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

function reverseAlphabetWithNumber(str) {
  const letters = str.match(/[A-Za-z]+/g);
  const numbers = str.match(/\d+/g);
  if (letters) {
    const reversedLetters = letters.map(word =>
      word.split('').reverse().join('')
    );
    const reversedStr = reversedLetters.join('') + (numbers ? numbers[0] : '');
    return reversedStr;
  }
  return str;
}

const inputStr = "NEGIE1";
const result = reverseAlphabetWithNumber(inputStr);
console.log(result);
