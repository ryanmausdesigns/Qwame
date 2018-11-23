var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// canvas.width = innerWidth;
canvas.height = 300;

var dockA = new Path2D();
dockA.arc(170, 30, 20, 0, 2 * Math.PI);

var motherA = new Path2D();
motherA.rect(0, 0, 200, 50);

var childA1 = new Path2D();
childA1.arc(120, 30, 20, 0, 2 * Math.PI);

var dockB = new Path2D();
dockB.arc(170, 80, 20, 0, 2 * Math.PI);

var childB1 = new Path2D();
childB1.arc(120, 80, 20, 0, 2 * Math.PI);

var dockC = new Path2D();
dockC.arc(170, 130, 20, 0, 2 * Math.PI);

var childC1 = new Path2D();
childC1.arc(120, 130, 20, 0, 2 * Math.PI);

var dockD = new Path2D();
dockD.arc(170, 180, 20, 0, 2 * Math.PI);

var childD1 = new Path2D();
childD1.arc(120, 180, 20, 0, 2 * Math.PI);

//drawDock 
ctx.stroke(dockA);
ctx.stroke(dockB);
ctx.stroke(dockC);
ctx.stroke(dockD);



//mouseOver 
const statusElement = document.querySelector("#status");
const dock = []; 


canvas.addEventListener("mousemove", (event) => {
    let bound = canvas.getBoundingClientRect();

    // Mouse X and Y
    let x = event.pageX - bound.top;
    let y = event.pageY - bound.left;

    if (ctx.isPointInPath(dockA, x, y)) {
        if (ctx.isPointInPath(motherA, x, y)) {
            ctx.stroke(childA1)
            }else {ctx.clearRect(0, 0, 145, canvas.height)
            }
        } else if (ctx.isPointInPath(dockB, x, y)){
            ctx.stroke(childB1);
        } else if (ctx.isPointInPath(dockC, x, y)){
            ctx.stroke(childC1);
        } else if (ctx.isPointInPath(dockD, x, y)){
            ctx.stroke(childD1);
        } else {
            ctx.clearRect(0, 0, 145, canvas.height);
        }});