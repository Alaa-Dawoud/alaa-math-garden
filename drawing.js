const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var isPressed = false;

var canvas;
var context;

function prepareCanvas() {
    // console.log('Preparing Canvas');
    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    document.addEventListener('mousedown', function (event) {
        // console.log('pressed');
        isPressed = true;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    document.addEventListener('mousemove', function (event) {


        if (isPressed) {
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;


            draw();
        }

    });

    document.addEventListener('mouseup', function (event) {
        // console.log('mouse Released');
        isPressed = false;
    });

    canvas.addEventListener('mouseleave', function (event) {
        isPressed = false;
    });



    // Touch Events
    canvas.addEventListener('touchstart', function (event) {
        // console.log('TouchDown!');
        isPressed = true;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
    });

    canvas.addEventListener('touchend', function (event) {
        isPressed = false;
    });

    canvas.addEventListener('touchcancel', function (event) {
        isPressed = false;
    });

    canvas.addEventListener('touchmove', function (event) {


        if (isPressed) {
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;

            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;


            draw();
        }

    });












    //https://developer.mozilla.org/en-US/docs/Web/Events
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event


    // let isDrawing = false;
    // let x = 0;
    // let y = 0;

    // const myPics = document.getElementById('my-canvas');
    // const context = myPics.getContext('2d');

    // context.fillStyle = BACKGROUND_COLOR;
    // context.fillRect(0, 0, myPics.clientWidth, myPics.clientHeight);
    // // The x and y offset of the canvas from the edge of the page
    // const rect = myPics.getBoundingClientRect();

    // // Add the event listeners for mousedown, mousemove, and mouseup
    // myPics.addEventListener('mousedown', e => {
    //   x = e.clientX - rect.left;
    //   y = e.clientY - rect.top;
    //   isDrawing = true;
    // });

    // myPics.addEventListener('mousemove', e => {
    //   if (isDrawing === true) {
    //     drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    //     x = e.clientX - rect.left;
    //     y = e.clientY - rect.top;
    //   }
    // });

    // window.addEventListener('mouseup', e => {
    //   if (isDrawing === true) {
    //     drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    //     x = 0;
    //     y = 0;
    //     isDrawing = false;
    //   }
    // });

    // function drawLine(context, x1, y1, x2, y2) {
    //   context.beginPath();
    //   context.strokeStyle = '#FFFFFF';
    //   context.lineWidth = 10;
    //   context.moveTo(x1, y1);
    //   context.lineTo(x2, y2);
    //   context.stroke();
    //   context.closePath();
    // }
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}