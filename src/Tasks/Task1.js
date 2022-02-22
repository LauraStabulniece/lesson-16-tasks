import isPalindrome from "../Helpers/isPalindrome";

function Task2(props) {
    const word = props.word;
    if (isPalindrome(word)) {
        return (
            <div>
               <strong><em>{word}</em></strong> is a palindrome
            </div>
        )
   
} else {
    return (
        <div>
            <strong><em>{word}</em></strong> is not a palindrome
        </div>
    )
    
}
  
}

export default Task2;