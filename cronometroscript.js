"use strict"

let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;

let time = 100;

let cron;

function runningCron() {
    document.getElementById('start-btn').style.animation = 'glowing 1300ms infinite';
}

 
 function stopRunningCron() {
     document.getElementById('start-btn').style.animation = '';
 }

 

function start() {
    cron = setInterval(() => { timer(); }, time);
    document.addEventListener("click",function() { runningCron(); });

};

function pause() {
    clearInterval(cron);
    document.addEventListener("click", (event) => {
        event.preventDefault();
   
        stopRunningCron();
       });
};

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;

    document.addEventListener("click", (event) => {
        event.preventDefault();
   
        stopRunningCron();
       });

    document.getElementById('counter').innerText = "00:00:00:00";
};

function timer() {

    ms++;
    if(ms == 10) {
        ms = 0;
        ss++;
        
        if (ss == 60) {
            ss = 0;
            mm++;

            if (mm == 60) {
                mm = 0;
                hh++; 
            }
        }
    }
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ms < 10 ? '0' + ms : ms);
    document.getElementById('counter').innerText = format;
};

