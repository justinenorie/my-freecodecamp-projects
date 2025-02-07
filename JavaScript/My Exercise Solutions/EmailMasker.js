// Email Masker: Shows the first and last letters while masking the rest of the username.
// Keeps the domain address (e.g., "@example.com") visible.

const maskEmail = (email) => {
    let hide = "*"; // Text used to hide parts of the email.

    // Extracting the username part before "@".
    // For example "justine@example.com", this will select the "justine".
    const textFinder = email.slice(0, email.indexOf("@"));

    // Extracting the domain address including "@".
    // For example "justine@example.com", this will select the "@example.com".
    const emailCheck = email.slice(email.indexOf("@"));

    // Extracting the first and last part of the username to be masked.
    // For example "justine", this selects everything except the first and last characters: "usti".
    const showFirstandLast = textFinder.slice(1, textFinder.length - 1);

    // Replace the username into "*" while keeping the first and last characters unchanged.
    const textToHide = textFinder.replace(showFirstandLast, hide.repeat(showFirstandLast.length));

    // Output of the result of username and the domain address.
    return textToHide + emailCheck;
};

let email = "apple.pie@example.com";
console.log(maskEmail(email)); // Output: "a*******e@example.com"

email = "freecodecamp@example.com";
console.log(maskEmail(email)); // Output: "f***********p@example.com"
