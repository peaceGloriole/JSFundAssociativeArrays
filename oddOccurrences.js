function solve(input) {
  let str = input.toLowerCase().split(' ');
  let words = new Map();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let word = str[i];

    if (words.has(word)) {
      words.set(word, words.get(word) + 1);
    } else {
      words.set(word, 1);
    }
  }

  words.forEach((count, word) => {
    if (count % 2 === 1) {
      result.push(word);
    }
  });

  console.log(result.join(` `));
}

// solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

solve('Cake IS SWEET is Soft CAKE sweet Food');
