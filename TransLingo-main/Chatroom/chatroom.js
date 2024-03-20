
//Variables
let newText;
const nickname = document.getElementById("nickname");
const button = document.getElementById("submit_button");
const chatroom = document.getElementById("one");
const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");
const form = document.getElementById("form");

//Just to create a nickname form separate from the chatroom itself.
chatroom.style.display = "none";

button.addEventListener("click", clickListener);

function clickListener(event) {
    event.preventDefault();



    if (nickname.value == "") {
        alert("Please enter a nickname");
    }

    else if (nickname.value != "") {
        chatroom.style.display = "block";
        document.getElementById("two").remove();
    }

}



// line break


const nickname_value = nickname.value;

//console.log(nickname_value);

//Variables
const database = firebase.database().ref();

const MESSAGES = document.getElementById("all-messages");
const MESSAGE_INPUT = document.getElementById("message");
const BUTTON = document.getElementById("send-btn");
const AUTH_KEY = ['7c188fa6-de87-2628-c973-9119c542f0f8:fx'];



// On click, the button sends the text to the translate API.




async function api_call() {
    const fromLang_VALUE = fromLang.value;
    const toLang_VALUE = toLang.value;
    const url = 'https://translate281.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '72629315eemsha0af21f6b419a3fp107adcjsn1f83f7f1b742',
            'X-RapidAPI-Host': 'translate281.p.rapidapi.com'
        },
        body: new URLSearchParams({
            text: `${document.getElementById("message").value}`,
            from: fromLang.value,
            to: toLang.value
        })
    };

    const response = await fetch(url, options);
    const result = await response.text();
    //console.log(result);
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            newText = data.response;
            console.log(data);
        })
    //api_call();

}

//To update value to Firebase.

function addMessageToBoard(rowData) {
    //Variables
    const ROW = rowData.val();
    //console.log(ROW);
    const NAME = ROW.name;
    const MESSAGE = ROW.message;


    const DIV_ELEMENT = document.createElement("div");
    const USERNAME_PARAGRAPH = document.createElement("p");
    const MESSAGE_PARAGRAPH = document.createElement("p");

    USERNAME_PARAGRAPH.innerHTML = NAME;
    MESSAGE_PARAGRAPH.innerHTML = MESSAGE;

    USERNAME_PARAGRAPH.className = "single-message-username";
    //Adds messages to board
    DIV_ELEMENT.appendChild(USERNAME_PARAGRAPH);
    DIV_ELEMENT.appendChild(MESSAGE_PARAGRAPH);

    DIV_ELEMENT.className = "single-message";

    MESSAGES.appendChild(DIV_ELEMENT);
   // itScrolls.current.scrollIntoView({ behaviour: 'smooth'}); 
}

database.on("child_added", addMessageToBoard);



function pleaseWork() {
    api_call()
        .then(() => {
            const USERNAME_VALUE = nickname.value;
            const MESSAGE_VALUE = document.getElementById("message").value;

            setTimeout(() => {
                if (MESSAGE_VALUE == "") {
                }

                else {
                    const VALUE = {
                        name: USERNAME_VALUE,
                        message: ` ${MESSAGE_VALUE} (${newText})`,
                    }
                    database.push(VALUE);
                    database.push(form);
                    MESSAGE_INPUT.value = "";
                }
            }, 4000)

        });

}

BUTTON.addEventListener("click", pleaseWork);
