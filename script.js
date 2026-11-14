
// GET HTML ELEMENTS

const music = document.getElementById("birthdaySong");

const musicToggle = document.getElementById("musicToggle");

const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letter");


// BACKGROUND MUSIC

musicToggle.addEventListener("click", function() {

    if (music.paused) {

        music.play();

        musicToggle.innerHTML = "♫ Pause Our Song";

    } else {

        music.pause();

        musicToggle.innerHTML = "♫ Play Our Song";

    }

});


// OPEN AND CLOSE LETTER

openLetter.addEventListener("click", function() {

    if (letter.hidden) {

        letter.hidden = false;

        openLetter.innerHTML = "Close Letter ♡";

    } else {

        letter.hidden = true;

        openLetter.innerHTML = "♡ Open Me";

    }

});
