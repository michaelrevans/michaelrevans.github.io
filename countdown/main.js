var doc = document;
var eventTitle = doc.getElementById('to-event');
var updateEventButton = doc.getElementById('update-event');
var inputCancelButton = doc.getElementsByClassName('input-cancel')[0];
var inputOverlay = doc.getElementsByClassName('input-overlay')[0];
var inputDateField = doc.getElementById('event-date');
var inputTimeField = doc.getElementById('event-time');
var inputEventField = doc.getElementById('event-event');
var inputSubmit = doc.getElementById('event-submit');
var timeViewMode = "sec";
var viewModeDropwdown = doc.getElementsByClassName('change-time-dropwdown')[0];
var timeLeftSpan = document.getElementById('time-left');


function checkLocalStorage() {
  if (localStorage.eventTime !== undefined && localStorage.eventDate !== undefined) {
    eventDate = localStorage.eventDate;
    eventTime = localStorage.eventTime;
    dateTime = convertInputToDate(eventDate, eventTime);
    eventName = localStorage.eventName;
    updateEvent(dateTime, eventName);
  }
}

function setLocalStorage(eventDate, eventTime, eventName) {
  localStorage.eventDate = eventDate;
  localStorage.eventTime = eventTime;
  localStorage.eventName = eventName;
}

function convertInputToDate(inputDate, inputTime) {
  var dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/g;
  var date = dateRegex.exec(inputDate);
  console.log(inputDate);
  console.log(parseInt(inputTime.slice(3, 5)));
  try {
      var finalDate = new Date(parseInt(date[1]), parseInt(date[2]) - 1, parseInt(date[3]), parseInt(inputTime.slice(0, 2)), parseInt(inputTime.slice(3, 5)));
  }
  catch (err) {
    throw new Error("convert input to date");
  }
  return finalDate;
}

function setInitialDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd.toString().length === 1) {
    dd = "0" + dd.toString();
  }
  if (mm.toString().length === 1) {
    mm = "0" + mm.toString();
  }
  inputDateField.value = yyyy + "-" + mm + "-" + dd;
}

function setInitialTimeMode() {
  viewModeDropwdown.value = timeViewMode;
}

function getUserInput() {
  var inputDate = inputDateField.value;
  var inputTime = inputTimeField.value;
  var inputName = inputEventField.value;
  try {
    var eventTime = convertInputToDate(inputDate, inputTime);
    setLocalStorage(inputDate, inputTime, inputName);
    updateEvent(eventTime, inputName);
  }
  catch (err) {
    console.log(err);
  }
}

function updateEvent(eventTime, eventName) {
  try {
    clearInterval(window.interval);
    updateNameString(eventName);
    console.log(eventTime);
    window.interval = setInterval(function() {
      updateTimeString(eventTime, timeViewMode);
    }, 100)
  }
  catch (err) {
    console.log(err);
  }
}

function updateNameString(eventName) {
  eventTitle.innerText = eventName;
}

function calculateTimeString(aim, mode) {
  var now = new Date();
  var diff = aim - now;
  var diffSec = parseInt(diff / 1000);
  var diffMin = parseInt(diffSec / 60);
  var diffHr = parseInt(diffMin / 60);
  var restDay = parseInt(diffHr / 24);
  var restHr = diffHr - (restDay * 24);
  var restMin = diffMin - (diffHr * 60);
  var restSec = diffSec - (diffMin * 60);
  var restDayStr = restDay === 1 ? ' day, ' : ' days, ';
  var restHrStr = restHr === 1 ? ' hour, ' : ' hours, ';
  var restMinStr = restMin === 1 ? ' minute, ' : ' minutes, ';
  var restSecStr = restSec === 1 ? ' second' : ' seconds';
  var timeString;
  switch (mode) {
    case "day":
      timeString = restDay + restDayStr + restHr + restHrStr + restMin + restMinStr + restSec + restSecStr;
      break;
    case "hour":
      timeString = diffHr + restHrStr + restMin + restMinStr + restSec + restSecStr;
      break;
    case "min":
      timeString = diffMin + restMinStr + restSec + restSecStr;
      break;
    case "sec":
      timeString = diffSec + restSecStr;
  }
  return timeString;
}

function updateTimeString(aim, mode) {
  var restTimeStr = calculateTimeString(aim, mode);
  timeLeftSpan.innerText = restTimeStr;
}

function updateViewMode() {
  viewModeDropwdown.addEventListener('change', function() {
    console.log('new mode');
    console.log(viewModeDropwdown.value)
    timeViewMode = viewModeDropwdown.value;
  })
}

setInitialDate();
setInitialTimeMode();
checkLocalStorage();
updateEventButton.addEventListener('click', function() {
  inputOverlay.classList.add("active");
});
inputCancelButton.addEventListener('click', function() {
  inputOverlay.classList.remove("active");
})
inputSubmit.addEventListener('click', function() {
  getUserInput();
  inputCancelButton.click();
})
updateViewMode();
