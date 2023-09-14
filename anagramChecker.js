// Anagram Checker

/* Return `true` if the two given strings are anagrams. Otherwise, return `false`.
A word is an <dfn>anagram</dfn> of another word if both use the same letters in the same quantity, but arranged differently.

For example:
- `friend` and `Finder` are anagrams.
- `The Morse Code` and `Here come dots` are anagrams as well.

**Note:** You'll need to remove **all non-alphanumeric characters** (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for **anagrams**.
Submit a pull request to the main branch with your solution. Do not modify the tests. Once you have created a PR with passing tests, then you have successfully completed the exercise.*/ 

function anagramChecker(string1, string2) {

  string1 = string1.replace(/[^a-zA-Z0-9]/g, '');
  string2 = string2.replace(/[^a-zA-Z0-9]/g, '');

  let lowerStr1 = string1.toLowerCase();
  let lowerStr2 = string2.toLowerCase();

  let arr1 = lowerStr1.split('').sort().join('');
  let arr2 = lowerStr2.split('').sort().join('');

  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
}

let result = anagramChecker("friend", "finder");

console.log(result);