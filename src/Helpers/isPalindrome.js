function isPalindrome(word) {
    const wordCleanedUp = word.toUpperCase().replace(/ /g, '');
    const wordReversed = wordCleanedUp.split('').reverse().join('');
    return wordCleanedUp === wordReversed;
}

export default isPalindrome;