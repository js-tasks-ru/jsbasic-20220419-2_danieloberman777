function checkSpam(str) {
  const word1 = "1xBet".toLowerCase();
  const word2 = "XXX".toLowerCase();
  const checkWord = str.toLowerCase();

  return checkWord.includes(word1) || checkWord.includes(word2);
}
