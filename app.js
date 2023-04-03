const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumnSilder = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

console.log("keysCheckbox : ", keysCheckbox)

let allKeys = [],
audio = new Audio("./tunes/a.wav");

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150)
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
})

const HandleVolumn = (e) => {
  audio.volume = e.target.value;
}

const pressedKey = (e) => {
  if(allKeys.includes(e.key)) playTune(e.key);
}

const showHideKeys = (e) => {
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumnSilder.addEventListener("input", HandleVolumn);
document.addEventListener("keydown", pressedKey);