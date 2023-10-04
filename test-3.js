// Soal :
// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// Contoh:  
// INPUT = ['xc', 'dz', 'bbb', 'dz']  
// QUERY = ['bbb', 'ac', 'dz']  
// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

function countWordsInArray(input, query) {
  const wordCount = {};
  for (const word of input) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  const output = query.map((word) => wordCount[word] || 0);
  return output;
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const output = countWordsInArray(input, query);

console.log(output);
