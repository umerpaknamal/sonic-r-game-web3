/* ♻️♻️♻️♻️Loading♻️♻️♻️♻️ */
window.addEventListener("DOMContentLoaded", function (event) {
    var load = document.getElementById("load");
    var loadEffect = setInterval(function () {
        if (!load.style.opacity) {
            load.style.opacity = 1;
        }
        if (load.style.opacity > 0) {
            load.style.opacity -= 0.3;
        } else {
            clearInterval(loadEffect);
            load.classList.remove("active");
        }
    }, 200);
});

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || 
                                window.mozRequestAnimationFrame || 
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;
  
    window.requestAnimationFrame = requestAnimationFrame;
  })();

/* 🖥️🖥️🖥️🖥️Window Resize🖥️🖥️🖥️🖥️ */
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    const parentDiv = document.getElementById("background");
    const objectL = document.getElementById("left");
    const objectR = document.getElementById("right");
    const marginLeft = parseInt(window.getComputedStyle(objectL).marginLeft);
    const marginRight = parseInt(window.getComputedStyle(objectR).marginRight);
    const leftPosition = parentDiv.offsetLeft + marginLeft;
    const rightPosition = parentDiv.offsetLeft + marginRight;
    objectL.style.left = leftPosition + "px";
    objectR.style.left = rightPosition + "px";
});

/* 💫💫💫💫Prevent scroll using Space or Arrows💫💫💫💫 */
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

/* 🎮🎮🎮🎮Start🎮🎮🎮🎮 */
document.addEventListener("keydown", function (){
    start();
    backgroundMove();
},  { once: true });

function start() {
    const button = document.getElementById("play");
    const sonic = document.getElementById("sonic");
    button.classList.add("hidden");
    sonic.classList.add("run");
    crono();

    sonic.addEventListener("animationend", function () {
        sonic.classList.remove("run");
        ground.style.animationDuration = '8.5s'
        sonic.style.backgroundImage = "url(sprites/sonic-run.gif)";

        game ();
        enemy();
    });
}