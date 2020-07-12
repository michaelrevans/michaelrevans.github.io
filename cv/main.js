/*
turns the caret upside down when a tab in the experiences section is opened. turns it back when closed
*/
$(document).ready(function() {
  $('[data-toggle="collapse"]').click(function() {
    $(this).find('.job-btns span').toggleClass('upside-down');
  });
});
