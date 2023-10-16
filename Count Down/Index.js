let TheEvent = new Date("12 31 2022 23:59:59").getTime();

let TheCounter = setInterval(function (){
    let TheCurrentTime = new Date().getTime();
    let TheTime = TheEvent - TheCurrentTime ;
    let days =  Math.floor(TheTime/1000/60/60/24) ;
    let hours = Math.floor((TheTime%(1000*60*60*24) / 1000 / 60 / 60)) ;
    let minutes =  Math.floor((TheTime%(1000*60*60) / 1000 / 60 )) ;
    let secounds = Math.floor((TheTime%(1000*60) / 1000 )) ;
document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
document.getElementById("hours").innerHTML = hours < 10 ? `${hours}` : hours ;
document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
document.getElementById("secounds").innerHTML = secounds < 10 ? `0${secounds}` : secounds ;

} , 1000)