$(document).ready(function () {
  function each_func() {
  var view = $('#namev').text('');
    $.each(names, function(index, value) {
      $('#namev').append(value + '<br>');
    });
  }
  var names = ['ariful', 'azad', 'noyon', 'nur'];
  each_func();
  $('#btn').click(function () {
    var name = $('#name').val();
    names.push(name);
    each_func();
  });
});

