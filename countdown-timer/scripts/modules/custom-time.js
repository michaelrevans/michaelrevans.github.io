import animateTime, { setEndTime } from './timer-animation';
import animateCircle from './circle-animation';
import { countdown } from './countdown';

const doc = document;
const body = doc.body;
const customTimeButton = doc.querySelector('.custom-time');
const customTimeInput = doc.querySelector('.custom-time input');
const customTimeSubmit = doc.querySelector('.custom-time button');
const startOverlay = doc.querySelector('.start-overlay');
const errorMessage = doc.querySelector('.error-message');
const timeModeSwitch = doc.querySelector('.timemode-switch');
const hoursDisplay = doc.querySelector('.hours-display');

// replaces button with input and focusses it
customTimeButton.addEventListener('click', function(event) {
  event.stopPropagation();
  customTimeInput.classList.add('fore');
  customTimeInput.focus();
});

// reveal button and hide input again on body click
body.addEventListener('click', function() {
  customTimeInput.classList.remove('fore');
});

// takes input value to start countdown
function startCustomCountdown() {
  const inputValue = customTimeInput.value
  const message = validateInput(inputValue);
  if (message === '') {
    const newInterval = inputValue * 60;
    startOverlay.classList.add('closed');
    showHoursOrNot(newInterval);
    animateTime(newInterval);
    setEndTime(newInterval);
    setTimeout(() => countdown(newInterval, animateTime, animateCircle), 1000);
  }
  errorMessage.textContent = message;
}

customTimeSubmit.addEventListener('click', function() {
  startCustomCountdown();
});

// start countdown on enter press
customTimeInput.addEventListener('keypress', function(event) {
  if (event.which === 13) {
    startCustomCountdown();
  }
});

// if error message is showing, check changed input to remove if input is valid
function revalidateOnChange() {
  const message = validateInput(customTimeInput.value);
  if (message === '' && errorMessage.textContent !== '') {
    errorMessage.textContent = '';
  }
}

customTimeInput.addEventListener('change', revalidateOnChange);
customTimeInput.addEventListener('keyup', revalidateOnChange);

// validates user input so that it's between 1 and 1440
function validateInput(inputValue) {
  let message;
  if (inputValue < 1) {
    message = 'Minutes must be a positive integer';
  } else if (inputValue > 1440) {
    message = 'Time cannot excede a day';
  } else {
    message = '';
  }
  return message;
}

// shows hours switch if input is greater than 60 minutes
function showHoursOrNot(interval) {
  if (interval > 3600) {
    timeModeSwitch.classList.remove('hidden');
    hoursDisplay.classList.remove('out');
  }
}
