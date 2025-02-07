const generatePassword = (pass) => {
    const password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let results = "";

    for (let i = 0; i < pass; i++) {
        results += password.charAt(Math.floor(Math.random() * password.length));
    }

    return results;

}

//Desired password length
const password = generatePassword(8);

console.log(`Generated password: ${password}`);

function myFunction([...restParams]){

}