//  2 things which is queryselector & addEventListener

// queryselector
// 1. text input
// 2. generate notes button
// 3. <p> to generate the summary

const textarea = document.querySelector("#noteInput");
const button = document.querySelector("#generateBtn");
const paragraph = document.querySelector("#infoText");
// console.log(button,textarea,paragraph)

button.addEventListener("click", async (e) => {

    // async function = asynchronous function
    // whenever use API or database
    const text = textarea.value

    try {
        // if there is a connection display here
    }catch(error){
        // if error display here
    }
})