# Flask is the back-end server
# responsible to receive input or request from front end
# Front end --> website/UI [html,css,tailwind,js]
# Back end  --> database   [python]

# Flask is the server,
# Server is the one making connection between the front-end and back-end
# Connection will be based on the url, by default the url will be
# http://127.0.0.1:5000 [localhost url]

# request is the term in regards to the message that we pass

# git = github
# vsc is telling that your code has an update
# it remind by changing color to yellow so that you will "push"
# "push" the code to github

from google import genai
from flask import Flask, request, jsonify

client = genai.Client(api_key="AIzaSyBKkXfm5vB11M9BRoevTOWWft83mTKYTME")

while True:
    user_input = input("You: ")

    if(user_input.lower() == "exit"):
        break

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=("Judge this input: ",user_input)
    )

    print("AI: ", response.text)
    print('-'*100)
