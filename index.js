const display = document.getElementById('clock');
const audio = new Audio('https://tuneguru.in/wp-content/uploads/2020/12/Harry-potter-ringtone-download-mp3-pagalworld.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
let day_night = 'AM'

function updateTime() {
    const date = new Date();

    const hour = (date.getHours());
    const minutes = (date.getMinutes());
    const seconds = (date.getSeconds());

    display.innerText=`${hour} : ${minutes} : ${seconds}  ${day_night}`

    if (hour > 12) {
        hour = hour - 12;
        day_night = 'PM'

    }

}

let btnCheck = document.querySelector('set-alarm');
let input = document.querySelector('input');
let result = document.querySelector('alert');





function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
  
  

    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
       
        }

       /* if(timeToAlarm == current) {
            alert('Dont enter the current time');
        }*/
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);

