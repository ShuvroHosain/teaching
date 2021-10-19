$(document).ready(function () {
  $("#findSearch").click(function () {
    var search_text = $("#search_text").val();
    // alert(search_text);
    $("body").removeHighlight().highlight(search_text);
  })
});


