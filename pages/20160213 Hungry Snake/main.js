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
    console.log("--------Geometry test 0.0.0--------\n");
    initModel();
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

/*
var ctx = {};
ctx.beginPath = context.beginPath;
ctx.closePath = context.closePath;
ctx.fill = context.fill;
ctx.stroke = context.stroke;
ctx.arc = function(cx, cy, ra, sa, ea) {
    context.arc((cx+1)*screenSize/2, (-cy+1)*screenSize/2, ra, sa, ea);
};
ctx.moveTo = function(x, y){
    context.moveTo((x+1)*screenSize/2, (-y+1)*screenSize/2);
};
ctx.lineTo = function(x, y){
    context.lineTo((x+1)*screenSize/2, (-y+1)*screenSize/2);
};
ctx.rect = function(x, y, w, h){
    context.rect((x+1)*screenSize/2, (-y+1)*screenSize/2, w*screenSize, h*screenSize);
}
ctx.fillStyle = context.fillStyle;
ctx.strokeStyle = context.strokeStyle;
*/

can.setAttribute("width", screenWidth + "px");
can.setAttribute("height", screenHeight + "px");
//glutCreateWindow("Geometry");

//Callback function registry
//glutDisplayFunc(&display);
//glutReshapeFunc(&reshape);

//glutKeyboardFunc(&keyboardCallback);
//glutKeyboardUpFunc(&keyboardUpCallback);
document.onkeydown = keyboardCallback;
document.onkeyup = keyboardUpCallback;

//glutMouseFunc(&mouseKey);
//glutMotionFunc(&mouseMotion);
//glutPassiveMotionFunc(&mouseMotion);

//Initialization
init();

setTimeout(timerCallback, 0);

//Main loop
//glutMainLoop();
