import isAnagram from "../Helpers/isAnagram";

function Words(props) {
    const word1 = props.word1;
    const word2 = props.word2;
    if (isAnagram(word1, word2)) {
        return (
            <div>
                <strong><em>{word1}</em></strong> and <strong><em>{word2}</em></strong> are anagrams
            </div>
        )

    } else {
        return (
            <div>
                <strong><em>{word1}</em></strong> and <strong><em>{word2}</em></strong> are not anagrams
            </div>
        )

    }

}
export default Words;