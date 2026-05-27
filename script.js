//  2 things which is queryselector & addEventListener

// queryselector
// 1. text input
// 2. generate notes button
// 3. <p> to generate the summary

const textarea = document.querySelector("#noteInput");
const button = document.querySelector("#generateBtn");
const paragraph = document.querySelector("#infoText");
// console.log(button,textarea,paragraph)

button.addEventListener("click", (e) => {
    paragraph.textContent = textarea.value
})