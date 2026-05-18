let buttons = document.querySelectorAll(".sound-btn");
let volumes = document.querySelectorAll(".volume-range");
const volumeMenu = document.getElementById("volume-menu");
const volumeMenuBtn = document.getElementById("volume-menu-btn");
const volumeDoneBtn = document.getElementById("volume-done-btn");

const sounds = [
    "assets/rain.mp3",
    "assets/thunder.mp3",
    "assets/city.mp3",
    "assets/crickets.mp3",
    "assets/lofi.mp3"
]
const audioElements = [];

buttons.forEach((btn, index) => {
    const audio = new Audio(sounds[index]);
    audio.loop = true;

    audioElements.push(audio);

    btn.addEventListener('click', () => {
        btn.classList.toggle("active");

        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    })
});

volumeMenuBtn.addEventListener("click", () => {
    volumeMenu.classList.toggle("show");
});

volumeDoneBtn.addEventListener("click", () => {
    volumeMenu.classList.toggle("show");
});

volumes.forEach((range, index) => {
    range.addEventListener("input", () => {
        audioElements[index].volume = range.value;
    });
});