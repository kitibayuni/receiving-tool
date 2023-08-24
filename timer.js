let time = {
  sec: 0,
  min: 0,
  hr: 0
}
let timerID = 0;

function startStopTimer(){
  const timerButton = document.getElementById('start-stop-button');
  if (timerID === 0){
    timerID = setInterval(runTime, 1000);
    timerButton.innerHTML = 'Stop';
    timerButton.className = 'pause-button';
  } else if (timerID != 0){
    clearInterval(timerID);
    timerID = 0;
    timerButton.innerHTML = 'Resume'
    timerButton.className = 'resume-button';
  }
}

function resetTimer(){
  const timerButton = document.getElementById('start-stop-button');
  clearInterval(timerID);
  time = {
    sec: 0,
    min: 0,
    hr: 0
  }
  timerID = 0;
  timerButton.innerHTML = 'Start';
  timerButton.className = 'start-button';
    document.getElementById('timer').innerHTML = 
    `${time.hr}h ${time.min}m ${time.sec}s`;
}

function runTime(){
  if(time.sec >= 60){
    time.min++;
    time.sec = 0;
  }
  if(time.min >= 60){
    time.hr++;
    time.min = 0;
  }
  document.getElementById('timer').innerHTML = 
  `${time.hr}h ${time.min}m ${time.sec}s`;
  time.sec++;
}