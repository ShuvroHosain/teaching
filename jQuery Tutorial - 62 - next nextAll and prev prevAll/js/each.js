
$(document).ready(function () {
  // $('.names li:first').append(' : Ariful Sikder');
  // $('.names li:last').append(' (:Islam Noyon)');

  // $('.names').find('li').first().append(' :Ariful Sikder');
  // $('.names').find('li').first().next().append(' :Ariful Sikder');
  // $('.names').find('li').last().prev().append(' :Ariful Sikder');
  // $('.names').find('li').prev().append(' :Ariful Sikder');
  // $('.names').find('li').next().append(' :Ariful Sikder');
  // $('.names').find('li').nextAll().append(' :Ariful Sikder');

  $('.menu').find('li').first().addClass('bold').click(function () {
    $(this).nextAll().toggle();
  }).nextAll().hide();;

});
