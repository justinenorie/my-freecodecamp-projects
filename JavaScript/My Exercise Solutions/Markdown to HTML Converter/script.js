const markDownInput = document.getElementById("markdown-input");
const output = document.getElementById("html-output");
const preview = document.getElementById("preview");

const conversions = {
  h1: [/^[ \t]*#[ \t](.+)/gm, "<h1>$1</h1>"],
  h2: [/^[ \t]*##[ \t](.+)/gm, "<h2>$1</h2>"],
  h3: [/^[ \t]*###[ \t](.+)/gm, "<h3>$1</h3>"],
  bold: [/((?:\*|_){2})(.*?)\1/gm, "<strong>$2</strong>"],
  italic: [/(\*|_)(.*?)\1/gm, "<em>$2</em>"],
  image: [/!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/gm, "<img alt='$1'src='$2'>"],
  url: [/\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/gm, "<a href='$2'>$1</a>"],
  blockquote: [/^[ \t]*>[ \t](.+)/gm, "<blockquote>$1</blockquote>"],
};

const convertMarkdown = () => {
  let inputValue = markDownInput.value;

  for (const key in conversions) {
    const [regex, replacement] = conversions[key];
    inputValue = inputValue.replace(regex, replacement);
  }

  return inputValue;
};

markDownInput.addEventListener("input", () => {
  const result = convertMarkdown();
  output.innerText = result;
  preview.innerHTML = result;
});