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
rocket.style.position = "absolute";
rocket.style.bottom = '0px';
rocket.style.left = '0px';

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
    height.innerHTML = "0"
})

abortMission.addEventListener('click', function(){
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if(confirm){
        flightStatus.innerHTML = "Mission aborted.";
        display.style.backgroundColor = 'green';
        height.innerHTML = "0"
    }
})



console.log('hello')
})
