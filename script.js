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
    // to avoid lagging 
    const text = textarea.value
    try {
        // if there is a connection display here
        // sending variable text to flask
        const req = await fetch("http://127.0.0.1:5000/summary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        })
        const data = await req.json()
        paragraph.textContent = data.summary
    }catch(error){
        // if error display here
        console.log("Fetch error: ", error)
        paragraph.textContent = error
    }
})

// git add .
// git commit -m "<your message>"
// git push