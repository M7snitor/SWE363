let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const darkSound = new Audio('undertaker.mp3');
const lightSound = new Audio('rizz.mp3');
// const acksSound = new Audio('ack.mp3');
// acksSound.volume = 0.5;
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    darkSound.volume = 0.4;
    darkSound.play();
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    lightSound.volume = 0.4;
    lightSound.play();
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
