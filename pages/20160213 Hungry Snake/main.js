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
    initModel();
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

//Main loop
//glutMainLoop();
