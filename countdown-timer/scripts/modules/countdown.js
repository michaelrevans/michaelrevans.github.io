import animateTime, { setEndTime } from './timer-animation';
import animateCircle from './circle-animation';
import completeAnimation from './complete-animation';

const doc = document;
const presetTimeButtons = Array.from(doc.getElementsByClassName('preset-time'));
const customTimeButton = doc.querySelector('.custom-time');
const startOverlay = doc.querySelector('.start-overlay');
const countdownStore = doc.querySelector('.timer-circle');

let counting;

// performs decrementing interval, delegates functions to animate timer and circle
 export function countdown(interval, animateTime, animateCircle) {
  let timeLeft = interval;
  animateCircle(timeLeft, interval, true);
  counting = setInterval(function() {
    timeLeft--;
    animateCircle(timeLeft, interval, false);
    animateTime(timeLeft);
    if (timeLeft <= 0) {
      completeAnimation();
      clearInterval(counting);
    }
  }, 1000);
}

// starts countdown for preset buttons
presetTimeButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    const newInterval = this.getAttribute('data-interval');
    startOverlay.classList.add('closed');
    animateTime(newInterval);
    setEndTime(newInterval);
    setTimeout(() => countdown(newInterval, animateTime, animateCircle), 1000);
  });
});
