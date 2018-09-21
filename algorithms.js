// algorithm solutions for basic algorithms scripting challenges in FCC


// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

// Reverse a String
function reverseString(str) {
    let newStr = str.split('').reverse().join('');
    return newStr;
}

// Factorialize a Number. Only run positive numbers and if 0, return 1.
function factorialize(num) {
  let Solution = 1;
  // if number is less than 0
  if(num < 0){
    return "Error";
  // if number is greater than 0
  } else if(num > 0) {
    for(let i = 1; i <= num; i++) {
      Solution *= i;
    }
    return Solution;
    // if number is 0
  } else {
  return Solution;
  }
} 

// Find the longest word in a string
function findLongestWordLength(str) {
  // Split the string into words and save to an array
  let longestWord = str.split(" ");
  // Declare a variable to store the longest word length
  let longestWordLength = 0;
  // Loop through array of words
  for (let word of longestWord) {
    // Ternary statement that checks the word length against the current longest word length and replace if current word length is bigger
    (word.length > longestWordLength) ? longestWordLength = word.length 
      // Keep current longest word length if the word being checked is smaller 
      : longestWordLength;
  }
  // Return the number of letters in the longest word in a string
  return longestWordLength;
} 