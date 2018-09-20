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
    } else{
    return Solution;
    }
  } 