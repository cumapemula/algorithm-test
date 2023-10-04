// Soal :
// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
// Contoh:  
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// longest(sentence) 
// mengerjakan: 11 character

function longest(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';
  let maxLength = 0;

  for (const word of words) {
    const length = word.length;
    if (length > maxLength) {
      maxLength = length;
      longestWord = word;
    }
  }

  return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = longest(sentence);

console.log(longestWord);
