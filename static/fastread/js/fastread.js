var reader = document.getElementById("reader");
var slider = document.getElementById("readingSpeed");
var output = document.getElementById("readingSpeedOutput");

reader.style.display = "none";

output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}


function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function fadeOutEffect(elementiD, milliseconds) {
    var fadeTarget = document.getElementById(elementiD);
    var fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.style.display = "none";
            fadeTarget.style.opacity = 1;
            return;
        }
    }, milliseconds);

}



async function StartFastReading() {

    await fadeOutEffect("config", 10);
    readertext = document.getElementById("textinput").value
    readertext = readertext.split(" ")

    wordshowinglength = 60000 / slider.value;

    reader.innerHTML = "Reading speed is set to: " + slider.value + " wpm or " + Math.floor(wordshowinglength) + "ms for each word. <br> Starting in 5 seconds"
    reader.style.display = "block";

    await Sleep(5000);
    for (let i = 0; i < readertext.length; i++) {
        const textelement = readertext[i];

        await Sleep(wordshowinglength);
        reader.innerHTML = textelement;
    }

    await Sleep(500);
    reader.style.display = "none";
    document.getElementById("config").style.display = "block";


}