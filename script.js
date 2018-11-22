var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// canvas.width = innerWidth;
canvas.height = 1000;

var dockA = new Path2D();
dockA.arc(170, 30, 20, 0, 2 * Math.PI);

var dockB = new Path2D();
dockB.arc(170, 80, 20, 0, 2 * Math.PI);

var dockC = new Path2D();
dockC.arc(170, 130, 20, 0, 2 * Math.PI);

var dockD = new Path2D();
dockD.arc(170, 180, 20, 0, 2 * Math.PI);

//drawDock 
ctx.stroke(dockA);
ctx.stroke(dockB);
ctx.stroke(dockC);
ctx.stroke(dockD);

//mouseOver 
const statusElement = document.querySelector("#status");
const dock = []; 

dock.push(dockA, dockB, dockC, dockD)

canvas.addEventListener("mousemove", (event) => {
    let bound = canvas.getBoundingClientRect();

    // Mouse X and Y
    let x = event.pageX - bound.top;
    let y = event.pageY - bound.left;

    for (let i = 0; i < dock.length; i++) {
        const shape = dock[i];

        if (ctx.isPointInPath(shape.path, x, y)) {
            statusElement.innerText = "Inside Shape";
        } else {
            statusElement.innerText = "Outside Shape";
        }

    }
});


