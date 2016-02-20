var kbstat = new Int32Array(256);
var mouseButton = 0;
var screenSize = 500;
var screenWidth = 500;
var screenHeight = 500;
var frameCount = 1;
var snakeDirNext = 0;
var contin = true;
var left_k, right_k, up_k, down_k;
var last_key = 0;
var hard;
var nice;

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
        document.cookie = "nice=false";
    }
    left_k = getCookie("left");
    right_k = getCookie("right");
    up_k = getCookie("up");
    down_k = getCookie("down");
    hard = getCookie("hard");
    nice = getCookie("nice");

    initModel();
}

function setkey(number){
    var s;
    if (number === 0) {
        s = "left";
        left_k = last_key;
    }
    else if (number === 1) {
        s = "right";
        right_k = last_key;
    }
    else if (number === 2) {
        s = "up";
        up_k = last_key;
    }
    else if (number === 3) {
        s = "down";
        down_k = last_key;
    }
    document.cookie = s + "=" + last_key;
}

function debug(){
    if (contin) {
        //Pause the game!
        console.log("Ha!");
        document.onkeydown = function(){
            last_key = event.keyCode;
            document.getElementById("showKey").innerHTML = "Last pressed key is : " + last_key;
        };
        contin = false;
        document.getElementById("debugdir").style.display = "block";
        document.getElementById("showKey").style.display = "block";
    }
    else {
        document.onkeydown = keyboardCallback;
        contin = true;
        setTimeout(timerCallback, 0);
        document.getElementById("debugdir").style.display = "none";
        document.getElementById("showKey").style.display = "none";
        document.getElementById("showKey").innerHTML = "";
    }
}

function t_hard() {
    hard = !hard;
    document.cookie = "hard=" + hard;
}

function t_nice() {
    nice = !nice;
    document.cookie = "nice=" + nice;
}

function getCookie(name) {
    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if (arr=document.cookie.match(reg)) return unescape(arr[2]);
    else    return undefined;
}

function restart(){
    contin = true;
    init();
    document.getElementById("score").innerHTML = "Score : 0";
    setTimeout(timerCallback, 0);
}

// Timer Callback
function timerCallback(){
    update();
    display();
    if (contin) setTimeout(timerCallback, nice?16:33);
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
