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
export function resetCircle() {
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

export default animateCircle;
