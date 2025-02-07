/* 
    
    Leap Year Calculator    
    It must be Divisible by 4 
    If divisible by 100, it must also be divisible by 400.

*/

//Initial Value of the year to check
let year = 2024;

/* 
    This function checks if the Year is Leap or Not 
    It takes the parameter number to check it
*/

const isLeapYear = (number) => {
    // This if statements using the % to check if it's divisible by and it returns true or false
    // First Operator checks if the numbers or years is divisible by 4 it will return true

    // The Second Operator contains two operator it means if numbers or years is divisible by 100 it must also divible by 400
    if (number % 4 === 0 && (number % 100 !== 0 || number % 400 === 0)){
        return `${number} is a leap year.`
    }
    //If condition are false 
    else{
        return `${number} is not a leap year.`
    }
};

// Outputs
let result = isLeapYear(year);
console.log(result); //2024 is a leap year.

year = 2000;
result = isLeapYear(year);
console.log(result); //2000 is a leap year.

year = 1900;
result = isLeapYear(year); 
console.log(result); //1900 is not a leap year.