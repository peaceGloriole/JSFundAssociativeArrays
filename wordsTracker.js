function wordsTracker(input) {
  let wordsObj = {};
  let wordsToFind = input.shift().split(' ');

  for (let word of wordsToFind) {
    wordsObj[word] = 0;
  }

  for (let word of input) {
    if (word in wordsObj) {
      wordsObj[word]++;
    }
  }

  let entries = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);

  for (let [word, count] of entries) {
    console.log(`${word} - ${count}`);
  }

}

// wordsTracker([
//   'this sentence',
//   'In', 'this', 'sentence', 'you', 'have',
//   'to', 'count', 'the', 'occurrences', 'of',
//   'the', 'words', 'this', 'and', 'sentence',
//   'because', 'this', 'is', 'your', 'task'
// ]);
wordsTracker([
  'is the',
  'first', 'sentence', 'Here', 'is',
  'another', 'the', 'And', 'finally', 'the',
  'the', 'sentence'
]);
