$(document).ready(function () {
  var names = ['ariful', 'azad', 'noyon', 'nur'];
  $('#btn').click(function () {
    var name =  $('#name').val();
    if (jQuery.inArray(name, names) != '-1') {
      alert(name + ' in the array');
    } else {
      alert(name + ' is not  in the array');
    }
  })
 
});
