//for this game to work i need some things
/* get the shapes thourgh their id's 
i need to store their id in aan array
i need to create an array array of game pattren for random shape pattern
i need to create an empty array to store user pattern [user pattern]......

main tools/functions
1 game pattren (function)
2 user pattren 
3 check function✔️
4 aeventlist........
*/

let shapeone = document.getElementById("shape1");
let shapetwo = document.getElementById("shape2");
let shapethree = document.getElementById("shape3");
let shapefour = document.getElementById("shape4");

let shapes = [shapeone,shapetwo,shapethree,shapefour]

let randomshape;
let gamepattren = [];
let userpattern = [];
let count = 0;


shapes.forEach(function(shape){
    shape.addEventListener("click", function(){
        userpattern.push(shape)
        checkpoint();
    })
})


function laptop(){
    userpattern = [];
    document.getElementById("overlay").style.visibility = "hidden";
    count++
    document.getElementById("count").textContent = count;
    randomshape = shapes[Math.floor(Math.random() * shapes.length)];
    partern()
}

function partern(){
    gamepattren.push(randomshape)
   gamepattren.forEach(function(shape, index){
    setTimeout(() => {
        shape.style.filter = "brightness(6)";
        setTimeout(() => {
            shape.style.filter = "brightness(1)";
        }, 500);
    }, index * 1000);
   }) 
}
function checkpoint(){
    let checkindex = userpattern.length - 1;

    if(gamepattren[checkindex] === userpattern[checkindex]){
        if(userpattern.length === gamepattren.length){
            document.getElementById("overlay2").style.visibility = "visible";
        }
    }
    else{
        document.getElementById("overlay3").style.visibility = "visible";
    }
}
function laf(){
     userpattern = [];
     gamepattren = [];
     count = 0;
     count++
    document.getElementById("overlay3").style.visibility = "hidden";
    document.getElementById("count").textContent = count;
    randomshape = shapes[Math.floor(Math.random() * shapes.length)];
    partern()
}
function laff(){
    userpattern = [];
    document.getElementById("overlay2").style = "hidden";
    laptop()
    // count++
    // document.getElementById("count").textContent = count;
    // randomshape = shapes[Math.floor(Math.random() * shapes.length)];
    // partern()
}
