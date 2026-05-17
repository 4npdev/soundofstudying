let buttons = document.querySelectorAll(".sound-btn");

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle("active");
    })
})