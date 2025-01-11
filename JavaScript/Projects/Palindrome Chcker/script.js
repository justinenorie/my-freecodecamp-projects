const inputValue = document.getElementById("text-input");
const checkerBtn = document.getElementById("check-btn");
const results = document.getElementById("result");
const paragraphResult = document.createElement('p');

const palindromeChecker = (input) => {
    
    if (input === '') {
        alert("Please input a value");
        return;
    }

    const checkInput = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const outputPalindrome = `
        ${input} ${checkInput === [...checkInput].reverse().join('') ? "is a" : "is not a"} palindrome.
    `;
    paragraphResult.classList.add('result-value');
    paragraphResult.textContent = outputPalindrome;
    results.appendChild(paragraphResult);
}

checkerBtn.addEventListener('click', () => {
    palindromeChecker(inputValue.value);
    inputValue.value = '';
});

inputValue.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        palindromeChecker(inputValue.value);
        inputValue.value = '';
    }
});