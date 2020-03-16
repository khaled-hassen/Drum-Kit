// plays audio and animates the button
function playAudio(event) {
    // this: is the id of who called this function 
    let btn = this;
    // check for keyboard input
    if (this === document) {
        btn = document.querySelector(`.${event.key}`);

        if (!btn)
            return;
    }

    let bgImage = getComputedStyle(btn).backgroundImage; // gets img name for audioTrackPath
    bgImage = bgImage.slice(bgImage.indexOf("images") + 7);
    let audioTrackPath = "sounds/" + bgImage.slice(0, bgImage.indexOf('.')) + ".mp3";

    let audioTrack = new Audio(audioTrackPath);
    audioTrack.play();

    // animate button
    animateButton(btn);
}

function animateButton(btn) {
    btn.classList.add("pressed");

    // remove pressed class after 0.1s delay
    setTimeout(btn => {
        btn.classList.remove("pressed");
    }, 100, btn);
}

// listen for mouse clicks
document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener("click", playAudio)
});

// listen for keyboard events
document.addEventListener("keypress", playAudio);