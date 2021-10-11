
$(document).ready(function () {
  $('ul').each(function () {
    
    has_li = $(this);

    if (has_li.has('li').length == 0) {
    has_li.after('empty li');
    }
  })
});
