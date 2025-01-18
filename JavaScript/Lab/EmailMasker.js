// Email Masker Showing the First and Last letter while hiding the actual email without hiding the address of the email

// Function for getting the email and mask it
const maskEmail = (email) => {
    let hide = "*"; // The text to hide the email

    //Using the slice method to remove the first and last part of the selected text

    //Selecting the text of the email from start until it reaches the @ part of the email
    const textFinder = email.slice(0, ( email.indexOf("@") ));
    
    //This will select the email from @ to last letter 
    const emailCheck = email.slice( email.indexOf("@") ); 

    // This is the method for selecting the First and Last letter
    const showFirstandLast = textFinder.slice(1, ( email.indexOf("@") - 1 ));
    
    //Replacing the text of the email with "*" except for first and last letter of the email
    const textToHide = textFinder.replace(showFirstandLast, hide.repeat(showFirstandLast.length));

    //Outputing the result of the replaced text and address of the email
    return textToHide + emailCheck;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));