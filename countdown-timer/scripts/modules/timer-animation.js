
const doc = document;
const timerDisplay = doc.querySelector('.timer-display');
const endTimeSpan = doc.querySelector('.end-time span');
const hourSwitchButton = Array.from(doc.getElementsByClassName('hour-switch'));
const hoursDisplay = doc.querySelector('.hours-display');
const hoursValue = doc.querySelector('.hours-value');
const hoursPlural = doc.querySelector('.hours-plural');
const minutesDisplay = doc.querySelector('.minutes-display');
const minutesValue = doc.querySelector('.minutes-value');
const minutesPlural = doc.querySelector('.minutes-plural');
const secondsDisplay = doc.querySelector('.seconds-display');
const secondsValue = doc.querySelector('.seconds-value');
const secondsPlural = doc.querySelector('.seconds-plural');

// performs calculation on remaining seconds to display as HH:MM:SS (or MM:SS)
function animateTime(timeLeft) {
  let minutes;
  const seconds = timeLeft % 60;
  const hoursOut = hoursDisplay.classList.contains('out');
  if (hoursOut) {
    minutes = (timeLeft - seconds) / 60;
  } else {
    minutes = ((timeLeft % 3600) - seconds) / 60;
  }
  const hours = (timeLeft - ((minutes * 60) + seconds)) / 3600;
  if (parseInt(hoursValue.innerHTML) != hours) hoursValue.innerHTML = hours;
  if (parseInt(minutesValue.innerHTML) != minutes) minutesValue.innerHTML = minutes;
  secondsValue.innerHTML = seconds;
  pluralise(hoursValue, hoursPlural);
  pluralise(minutesValue, minutesPlural);
  pluralise(secondsValue, secondsPlural);
}

// function that simply removes s from hour, minute, second when number above is 1
function pluralise(value, plural) {
  if (parseInt(value.innerHTML) === 1) {
    plural.style.display = 'none';
  } else {
    plural.style.display = '';
  }
}

// takes interval and displays end time in HH:MM above circle
export function setEndTime(interval) {
  const startTime = ((new Date()).getTime() / 1000);
  const endTime = new Date((startTime + parseInt(interval)) * 1000);
  const endTimeHours = ('0' + endTime.getHours()).slice(-2);
  const endTimeMinutes = ('0' + endTime.getMinutes()).slice(-2);
  endTimeSpan.innerHTML = `${endTimeHours}:${endTimeMinutes}`;
}

// switch to turn hours on and off (for custom timer only)
function hoursOutSwitch(turningOff) {
  const minsVal = parseInt(minutesValue.innerHTML);
  const hoursVal = parseInt(hoursValue.innerHTML);
  if (turningOff) {
    const newMins = (hoursVal * 60) + minsVal;
    minutesValue.innerHTML = newMins;
  } else {
    const newHours = Math.floor(minsVal / 60);
    const newMins = minsVal - (newHours * 60);
    minutesValue.innerHTML = newMins;
    hoursValue.innerHTML = newHours;
  }
}

// click handler for switch
hourSwitchButton.forEach((button, index, arr) => {
  button.addEventListener('click', function() {
    const isOut = hoursDisplay.classList.contains('out');
    hoursDisplay.classList.toggle('out');
    hoursOutSwitch(!isOut);
    pluralise(hoursValue, hoursPlural);
    pluralise(minutesValue, minutesPlural);
    arr.forEach(button => button.classList.toggle('active'));
  });
});



export default animateTime;
