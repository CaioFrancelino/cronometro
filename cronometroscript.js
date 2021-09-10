let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;

let time = 100;

let cron;

function runningCron() {
    document.getElementById('start-btn').style.animation = 'glowing 700ms infinite';
    document.getElementById('start-btn').classList.add('button-disabled');
}

 
 function stopRunningCron() {
     document.getElementById('start-btn').style.animation = '';
     document.getElementById('start-btn').classList.remove('button-disabled');
 }

 

function start() {
    cron = setInterval(() => { timer(); }, time);
    
    runningCron();
    
};

function pause() {
    clearInterval(cron);
    
   stopRunningCron();

};

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;

    stopRunningCron();

    document.getElementById('counter').innerText = "00:00:00:00";
};

// function preventDoubleInterval () {

// }


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
