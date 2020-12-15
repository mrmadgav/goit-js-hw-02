const findLongestWord = function (string) {
  // твой код
  let maxElement = 0;
  let maxStr;
  const makeArray = string.split(" ");
  console.log(makeArray);
  for (let i = 0; i < makeArray.length; i++) {
    if (maxElement < makeArray[i].length) {
      maxElement = makeArray[i].length;
      maxStr = makeArray[i];
    }
  }
  return maxStr;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
