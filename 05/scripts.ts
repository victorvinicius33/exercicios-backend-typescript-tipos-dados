const separateLettersByHyphen = (word: string): string => {
  let newWord: string = '';

  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) {
      newWord = newWord + word[i];
    } else {
      newWord = newWord + word[i] + '-';
    }

  }

  return newWord;
}

const word = ('Programador');

console.log(separateLettersByHyphen(word));
