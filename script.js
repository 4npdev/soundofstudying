let buttons = document.querySelectorAll(".sound-btn");
const sounds = [
    "assets/rain.mp3",
    "assets/thunder.mp3",
    "assets/city.mp3",
    "assets/crickets.mp3",
    "assets/lofi.mp3"
]

buttons.forEach((btn, index) => {
    const audio = new Audio(sounds[index]);
    audio.loop = true;

    btn.addEventListener('click', () => {
        btn.classList.toggle("active");

        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    })

    
})