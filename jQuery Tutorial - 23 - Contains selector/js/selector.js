$(document).ready(function () {
$("#search_item").keyup(function(){
   var search_name =  $(this).val();

   $('#names li').removeClass('highlight');
   
   if (jQuery.trim(search_name) != '') {
     $("#names li:contains('"+ search_name +"')").addClass('highlight');
   }
});
});