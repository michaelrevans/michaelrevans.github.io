/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["resetCircle"] = resetCircle;
const timerCircle = document.querySelector('.timer-circle circle');
let dashOffset = timerCircle.getTotalLength();

// moves green fill around circle to show timer completion
function animateCircle(timeLeft, interval, reset) {
  // used once when new timer is set
  if (reset) {
    resetCircle();
  }
  // moves green fill around by the required amount
  timerCircle.style.strokeDashoffset = dashOffset * ((timeLeft - 1) / interval);
  if (timeLeft === 0) {
    timerCircle.style.strokeDashoffset = 0;
  }
}

// reset circle between countdowns
function resetCircle() {
  timerCircle.classList.add('resetting');
  timerCircle.style.strokeDashoffset = dashOffset
  timerCircle.classList.remove('resetting');
}

// get total circle length (used on resize event)
function recalculateDashOffset() {
  dashOffset = timerCircle.getTotalLength();
}

// debounced resize event, fires 0.2s after final resize event occurs
function resize() {
  let i;
  window.addEventListener('resize', function() {
    clearTimeout(i);
    i = setTimeout(() => {
      recalculateDashOffset();
    }, 200);
  });
}

resize();

/* harmony default export */ __webpack_exports__["default"] = (animateCircle);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setEndTime"] = setEndTime;

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
function setEndTime(interval) {
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



/* harmony default export */ __webpack_exports__["default"] = (animateTime);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["countdown"] = countdown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_animation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_animation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_animation__ = __webpack_require__(4);




const doc = document;
const presetTimeButtons = Array.from(doc.getElementsByClassName('preset-time'));
const customTimeButton = doc.querySelector('.custom-time');
const startOverlay = doc.querySelector('.start-overlay');
const countdownStore = doc.querySelector('.timer-circle');

let counting;

// performs decrementing interval, delegates functions to animate timer and circle
 function countdown(interval, animateTime, animateCircle) {
  let timeLeft = interval;
  animateCircle(timeLeft, interval, true);
  counting = setInterval(function() {
    timeLeft--;
    animateCircle(timeLeft, interval, false);
    animateTime(timeLeft);
    if (timeLeft <= 0) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__complete_animation__["default"])();
      clearInterval(counting);
    }
  }, 1000);
}

// starts countdown for preset buttons
presetTimeButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    const newInterval = this.getAttribute('data-interval');
    startOverlay.classList.add('closed');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timer_animation__["default"])(newInterval);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timer_animation__["setEndTime"])(newInterval);
    setTimeout(() => countdown(newInterval, __WEBPACK_IMPORTED_MODULE_0__timer_animation__["default"], __WEBPACK_IMPORTED_MODULE_1__circle_animation__["default"]), 1000);
  });
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(2);
__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(4);
__webpack_require__(5);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle_animation__ = __webpack_require__(0);


const doc = document;
const startOverlay = doc.querySelector('.start-overlay');
const displayScreen = doc.querySelector('.display-screen');
const newTimerButton = doc.querySelector('.new-timer');
const closeAppButton = doc.querySelector('.close-app');

// when timer is finished, prepare screen for options
function completeAnimation() {
  displayScreen.classList.add('done');
}

// when new tmer button is clicked, load original elements back to display screen
newTimerButton.addEventListener('click', function() {
  startOverlay.classList.remove('closed');
  displayScreen.classList.remove('done');
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle_animation__["resetCircle"])();
});


closeAppButton.addEventListener('click', () => window.close());

/* harmony default export */ __webpack_exports__["default"] = (completeAnimation);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer_animation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_animation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countdown__ = __webpack_require__(2);




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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timer_animation__["default"])(newInterval);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timer_animation__["setEndTime"])(newInterval);
    setTimeout(() => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__countdown__["countdown"])(newInterval, __WEBPACK_IMPORTED_MODULE_0__timer_animation__["default"], __WEBPACK_IMPORTED_MODULE_1__circle_animation__["default"]), 1000);
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map