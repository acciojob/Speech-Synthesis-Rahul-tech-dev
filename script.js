// Your script here.
let text = document.getElementById("text");
let speak = document.getElementById("speakBtn");
let rate = document.getElementById("rate");
let pitch = document.getElementById("pitch");
let stop = document.getElementById("stopBtn");
let voice = document.getElementById("voiceSelect");

let allVoices = speechSynthesis.getVoices();

speechSynthesis.onvoiceschanged = () => {
    allVoices = speechSynthesis.getVoices();

    voice.innerHTML = "";

    allVoices.forEach((item, idx) => {
        let options = document.createElement("option");
        options.textContent = item.name;
        options.value = idx;
        voice.appendChild(options);
    });
};

let utterance;

speak.addEventListener("click", () => {

    if (text.value.trim() === "") {
        alert("Please enter some text");
        return;
    }

    if (allVoices.length === 0) {
        alert("No voices available. Please try again.");
        return;
    }

    speechSynthesis.cancel();

    utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = allVoices[voice.value];
    utterance.rate = Number(rate.value);
    utterance.pitch = Number(pitch.value);

    speechSynthesis.speak(utterance);
});

stop.addEventListener("click", () => {
    speechSynthesis.cancel();
});

rate.addEventListener("input", () => {
    if (utterance && speechSynthesis.speaking) {
        speechSynthesis.cancel();

        utterance = new SpeechSynthesisUtterance(text.value);
        utterance.voice = allVoices[voice.value];
        utterance.rate = Number(rate.value);
        utterance.pitch = Number(pitch.value);

        speechSynthesis.speak(utterance);
    }
});

pitch.addEventListener("input", () => {
    if (utterance && speechSynthesis.speaking) {
        speechSynthesis.cancel();

        utterance = new SpeechSynthesisUtterance(text.value);
        utterance.voice = allVoices[voice.value];
        utterance.rate = Number(rate.value);
        utterance.pitch = Number(pitch.value);

        speechSynthesis.speak(utterance);
    }
});

voice.addEventListener("change", () => {

    if (speechSynthesis.speaking && text.value.trim() !== "") {
        speechSynthesis.cancel();

        utterance = new SpeechSynthesisUtterance(text.value);
        utterance.voice = allVoices[voice.value];
        utterance.rate = Number(rate.value);
        utterance.pitch = Number(pitch.value);

        speechSynthesis.speak(utterance);
    }
});
