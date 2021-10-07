
// $(document).ready(function () {
//   $('a').mouseenter(function () {
//     $(this).addClass('bold');
//   }).mouseleave(function () {
//     $(this).removeClass('bold');
//   });
// });

// let's do by bind some code 

$(document).ready(function () {
  $('a').bind('mouseenter mouseleave', function () {// bind paramiter can handle multiple event handler
    $(this).toggleClass('bold');
  });
})