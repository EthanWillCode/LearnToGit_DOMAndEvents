// Write your JavaScript code here.
// Remember to pay attention to page loading!



window.addEventListener("load", function (){

let flightStatus = document.getElementById("flightStatus");
let display = document.getElementById("shuttleBackground");
let height = document.getElementById("spaceShuttleHeight");
let takeOffButton = document.getElementById("takeoff");
let landButton = document.getElementById("landing");
let abortMission = document.getElementById("missionAbort");
let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");
let rocket = document.getElementById("rocket")

//set rocket start location
function origin(){
rocket.style.position = "absolute";
rocket.style.bottom = '0px';
rocket.style.left = '0px';
}

origin()

takeOffButton.addEventListener('click', function(){
    let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(confirm){
        flightStatus.innerHTML = "Shuttle in flight.";
        display.style.backgroundColor = 'blue';
        height.innerHTML = "10000";
    }
})

landButton.addEventListener('click', function(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed";
    display.style.backgroundColor = 'green';
    origin();
    height.innerHTML = "0"
})

abortMission.addEventListener('click', function(){
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if(confirm){
        flightStatus.innerHTML = "Mission aborted.";
        display.style.backgroundColor = 'green';
        origin();
        height.innerHTML = "0"
    }
})

left.addEventListener('click', function(){
    let movement = parseInt(rocket.style.left) - 10 + 'px'
    rocket.style.left = movement;
})

right.addEventListener('click', function(){
    let movement = parseInt(rocket.style.left) + 10 + 'px'
    rocket.style.left = movement;
})

up.addEventListener('click', function(){
    let movement =parseInt(rocket.style.bottom) + 10 + 'px'
    rocket.style.bottom = movement;
    height.innerHTML = parseInt(height.innerHTML) +10000;
})

down.addEventListener('click', function(){
    let movement =parseInt(rocket.style.bottom) - 10 + 'px'
    rocket.style.bottom = movement;
    height.innerHTML = parseInt(height.innerHTML) -10000;
})

// personally I think it is kinda funny when the rocket goes off screen. I clearly have not been getting enough sleep
console.log('hello')
})
