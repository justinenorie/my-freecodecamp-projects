const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let regex = "";

  if (globalFlag.checked) {
    regex += "g";
  }

  if (caseInsensitiveFlag.checked) {
    regex += "i";
  }

  return regex
}

testButton.addEventListener("click", () => {
  const flag = getFlags();
  const regex = new RegExp(regexPattern.value, flag);
  let isMatch;

  console.log(regex);

  if (globalFlag.checked) {
    stringToTest.innerHTML = stringToTest.innerText.replaceAll(regex, "<span class='highlight'>$&</span>");
    isMatch = [...stringToTest.innerText.matchAll(regex)];
    console.log(isMatch);
    console.log("global is checked");
  }else{
    stringToTest.innerHTML = stringToTest.innerText.replace(regex, "<span class='highlight'>$&</span>");
    isMatch = stringToTest.innerText.match(regex);
    console.log(isMatch);
    console.log("global is not checked");
  }

  testResult.innerText = isMatch ? isMatch.join(", ") : "no match";
});
