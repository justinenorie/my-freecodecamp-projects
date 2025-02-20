const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");

const drumSet = [
  { key: "Q", name: "Heater 1", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3" },
  { key: "W", name: "Heater 2", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3" },
  { key: "E", name: "Heater 3", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3" },
  { key: "A", name: "Heater 4", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3" },
  { key: "S", name: "Clap", src: "https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3" },
  { key: "D", name: "Open HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3" },
  { key: "Z", name: "Kick-n'-Hat", src: "https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3" },
  { key: "X", name: "Kick", src: "https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3" },
  { key: "C", name: "Closed HH", src: "https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3" }
];

const playSound = (audioElement, name) => {
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
    display.innerText = name;
  }
};

drumSet.forEach((drum) => {
  const drumPad = document.createElement("div");
  drumPad.classList.add("drum-pad");
  drumPad.id = drum.key;
  drumPad.innerText = drum.key;

  const audio = document.createElement("audio");
  audio.classList.add("clip");
  audio.id = drum.key;
  audio.src = drum.src;

  drumPad.appendChild(audio);
  padBank.appendChild(drumPad);
});

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    const audio = this.querySelector("audio"); 
    if (audio) {
      const drum = drumSet.find(set => set.key === this.id); 
      playSound(audio, drum.name);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.querySelector(`audio#${key}`);
  if (audio) {
    const drum = drumSet.find(set => set.key === key);
    playSound(audio, drum.name);
  }
});
