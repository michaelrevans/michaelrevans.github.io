/*
$(document).ready(function() {
  var expanded = $('button.job-btns').attr('aria-expanded');
  if (expanded) {
    $(this).addClass('upside-down');
  } else {
    $(this).removeClass('upside-down');
  }
});
*/

$(document).ready(function() {
  $('.job-btns').click(function() {
    $(this).toggleClass('upside-down');
  });
});
