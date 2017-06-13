import { resetCircle } from './circle-animation';

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
  resetCircle();
});


closeAppButton.addEventListener('click', () => window.close());

export default completeAnimation;
