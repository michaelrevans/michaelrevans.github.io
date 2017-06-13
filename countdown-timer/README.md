# Countdown timer

## Functionality

 - user selects one of the reset timers, 5, 15, 30 minutes OR enters desired number of minutes and clicks start, or presses enter
  - start overlay disappears off the top, initial countdown time is shown inside grey circle
  - countdown timer begins after a short pause
  - as the countdown timer counts down, the circle around it fills continuously to a green colour
  - upon completion of the timer, the digits fade out, replaced by completion message and further options
  - options are to close, which closes the page in the browser, or to start new timer, which takes us back to the start overlay (start from above)


## Development

The development languages were SCSS and ES6. SCSS was compiled into CSS using npm scripts and node-sass. Both were bundled into single files using Webpack, which was also used alongside Babel to transpile the ES6 into ES5 code.
Polyfill.io was included in order to polyfill ES6 features for older browsers.


## Design

The design has been kept to minimal colours and very simply animations, mostly due to the time restrictions. I chose a set of non-clashing colours, and even though they would not be my optimal choice, I found them to be satisfactory and provide nice decoration for the page.

## Potential Next Steps

Due to the nature of the task, it serves its purpose. If it were a page I was developing for my own reasons (which it may become), I would likely make the following updates and improvements:
 - a pause button to pause and restart the timer
 - a reset button to reset the timer to its start time
 - an option to return to the start screen before the timer runs out
 - a more advanced time mode switch, probably offering the option to show just seconds for all timers
 - a more sleek design with some additional features for design-only purposes
 - varying fonts
 - potentially a tab system to create multiple timers to run alongside one another
 - greater accessibility for keyboard users
 - better styled and more explanatory error messages

I intend to continue with the project and make it my own, and the above changes will be some of those that I make.
