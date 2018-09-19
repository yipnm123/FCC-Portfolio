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