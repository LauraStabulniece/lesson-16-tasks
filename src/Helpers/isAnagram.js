const cleanedUpWord = (word) => {
    return word
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .sort()
    .join('')
}

const isAnagram = (word1, word2) => {
    word1 = cleanedUpWord(word1);
    word2 = cleanedUpWord(word2);

    return word1 === word2;
}

export default isAnagram;
