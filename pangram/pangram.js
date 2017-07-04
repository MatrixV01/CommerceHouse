/**
    ____                 __   _______            __
   / __ )_________ _____/ /  / ____(_)___  _____/ /_  ___  _____
  / __  / ___/ __ `/ __  /  / /_  / / __ \/ ___/ __ \/ _ \/ ___/
 / /_/ / /  / /_/ / /_/ /  / __/ / / / / / /__/ / / /  __/ /
/_____/_/   \__,_/\__,_/  /_/   /_/_/ /_/\___/_/ /_/\___/_/
*/

// Refactored for ES6 and eslint/airbnb style guide

// Tests for and removes duplicates from array
const unique = (arr) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (!result.includes(el)) result.push(el);
  }
  return result;
};

// Returns true or false if all letters of alphabet are present in sentence or not
const isPangram = (sentence) => {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const clrSentence = sentence.replace(/\W/g, '').toLowerCase().split('');
  const uniqueSentence = unique(clrSentence).sort();
  if (JSON.stringify(uniqueSentence) === JSON.stringify(alpha)) {
    return true;
  }
  return false;
};

// Test sentences
console.log(isPangram("TTTTTTTTTTThe quick, !/brown fox ''''' !@#$@$$$#)(*jumps over the lazy dog"));
console.log(isPangram("A wizard's job is to vex chumps quickly in fog"));
console.log(isPangram("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
console.log(isPangram('This is not a pangram'));
