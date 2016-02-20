var kbstat = new Int32Array(256);
var mouseButton = 0;
var screenSize = 500;
var screenWidth = 500;
var screenHeight = 500;
var frameCount = 1;
var snakeDirNext = 0;
var contin = true;

// Initialization
function init(){
    //console.log("--------Geometry test 0.0.0--------\n");
    //init cookie
    if (document.cookie.toString() === [""].toString()) {
        document.cookie = "hard=false";
        document.cookie = "high_score=0";
        document.cookie = "left=37";
        document.cookie = "up=38";
        document.cookie = "right=40";
        document.cookie = "down=39";
    }
    initModel();
}

function setkey(number){
    var s;
    if (number === 0) s = "left";
    else if (number === 1) s = "right";
    else if (number === 2) s = "up";
    else if (number === 3) s = "down";
    s += "=";
    document.cookie = s + document.getElementById("showKey").innerHTML;
}

function debug(){
    if (contin) {
        //Pause the game!
        console.log("Ha!");
        document.onkeydown = function(){
            document.getElementById("showKey").innerHTML = event.keyCode;
        };
        contin = false;
        document.getElementById("debugdir").style.display = "block";
    }
    else {
        document.onkeydown = keyboardDownCallback;
        contin = true;
        document.getElementById("debugdir").style.display = "none";
    }
}

function getCookie(name){
    for (var i in document.cookie.split(";")) {
        if (i.split("=")[0] === name) return i.split("=")[1];
    }
    console.log("Can not find cookie by name :", name);
    return undefined;
}

function restart(){
    contin = true;
    init();
    document.getElementById("score").innerHTML = "Score : 0";
    setTimeout(timerCallback, 33);
}

// Timer Callback
function timerCallback(){
    update();
    display();
    if (contin) setTimeout(timerCallback, 33);
}

// Keyboard Callback
function keyboardCallback(){
    var keyCode = event.keyCode;
    kbstat[keyCode] = 1;
}

function keyboardUpCallback(){
    var keyCode = event.keyCode;
    kbstat[keyCode] = 0;
}

/* main*/

can.setAttribute("width", screenWidth + "px");
can.setAttribute("height", screenHeight + "px");
document.onkeydown = keyboardCallback;
document.onkeyup = keyboardUpCallback;
init();

setTimeout(timerCallback, 0);

window.onbeforeunload = function(){
    document.cookie = "hard=" + document.getElementById("difficulty").checked;
};

//Main loop
//glutMainLoop();
