

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const enc = new TextEncoder();
let recognition = new SpeechRecognition();
command = "";
connection = false;
recognition.lang = 'ar-sa';
recognition.onspeechend = () => {

    recognition.stop();
}

button_to_lang.addEventListener('click', () => {
    var langText = document.getElementById("lang1");
    if (recognition.lang == 'ar-sa') {
        recognition.lang = 'en-US';
        langText.innerHTML = 'English';
    }
    else {
        recognition.lang = 'ar-sa';
        langText.innerHTML = 'Arabic';
    }
})
button_to_start.addEventListener('click', () => {


    recognition.onresult = (result) => {

        box.innerHTML = result.results[0][0].transcript;
        command = result.results[0][0].transcript;


        if (connection) {
            send();
        }
    }
    recognition.start();
})
async function send() {
    await writer.write(enc.encode(command));
    console.log('sent');
    console.log(command);
}

async function connect() {


    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    writer = port.writable.getWriter();
    connection = true;
}