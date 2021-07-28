const text = document.querySelector(".keyboard-animation");
const strText = text.textContent;
const splitText = strText.split(/\s+/);

text.textContent = "";
splitText.forEach(element => {
    splitInChars = element.split("");
    console.log(splitInChars)
    for(let i=0;i<splitInChars.length;i++){
        text.innerHTML += "<span class='keyboard-animation-textitem'>" + splitInChars[i] + "</span>";
        console.log(splitInChars[i]);
    }
    text.innerHTML += "<span style='margin:10px;' class='keyboard-animation-textitem'> </span>" 
});





let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add("transform");
    
    
    char++;
    if(char === document.getElementsByClassName("keyboard-animation-textitem").length){
        fade(document.querySelector(".fade-item"));
        commplete();
        return;
    }

}

function commplete(){
    clearInterval(timer);
    timer = null;
}

function fade(element) {
    var op = 0.1;  
    
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 35);
}