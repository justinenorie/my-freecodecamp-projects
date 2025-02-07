const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", (e) => {

    const inputValue = e.target.value;
    const charLength = inputValue.length;

    if (charLength < 50) {
        charCount.style.color = "black";
        charCount.innerText = `Character Count: ${charLength}/50`;
    } else {
        charCount.style.color = "red";
        e.target.value = inputValue.slice(0, 50);
        charCount.innerText = `Character Count: 50/50`;
    }

});
