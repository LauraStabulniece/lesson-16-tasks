import Task1 from "./Tasks/Task1";
import Task2 from "./Tasks/Task2";
import Task3 from "./Tasks/Task3";


// 1. Pass a word / phrase to a component as a param and dispay a 
// message if the word is a palindome or not:
// "{word}" is a palindome
// "{word}" is not a palindrome
// Do this for 3 words

// 2. Pass 2 words / phrases as parameters to a component. 
// Show a message if they are anagrams or not
// "{word1}" and "{wrod2}" are anagrams
// Do this for 3 words / phrases

// 3. Create a component, that will receive one paramater - a word.
// The component should display this content:
// {word} - {number of letters in it}
// The word should be bold
// the background color of the component should be red, 
// if the number of letters in it is even, 
// and green if it is odd
// Do this for 3 words


function App() {
  return (
    <div>
      <h2>Task 1</h2>
      <Task1 word="madam" />
      <Task1 word="woohoooo" />
      <Task1 word="nurses run" />

      <h2>Task 2</h2>
      <Task2 word1="foo" word2="oho" />
      <Task2 word1="heart" word2="earth" />
      <Task2 word1="lol" word2="lolz" />

      <h2>Task 3</h2>
      <Task3 word="eyes"/>
      <Task3 word="bright"/>
      <Task3 word="wow"/>
    </div>
  );
}

export default App;
