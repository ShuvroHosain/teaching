

$(document).ready(function () {
  $('.link').click(function () {
    option_l = $(this).text();
    $('#select').append('<option>'+option_l+'</option>')
})
});
