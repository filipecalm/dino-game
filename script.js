let dino = document.getElementById("dino");
let cactus = document.getElementById("cactus");
let counter = 0;

function jump(){
    if(dino.classList == "animate"){return}
    dino.classList.add("animate");
    setTimeout(function(){
        dino.classList.remove("animate");
    }, 300);
}
var checkDead = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft < 10 && cactusLeft >- 10 && dinoTop >= 250){
        cactus.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter=0;
        cactus.style.animation = "cactus 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);

