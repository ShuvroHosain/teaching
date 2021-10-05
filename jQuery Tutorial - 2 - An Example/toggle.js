
$('#toggle_messege').click(function () {
    var val = $('#toggle_messege').attr('value');
   
    var fast = $('#messege').toggle('fast');
    
    if (val == 'Hide') {
       var res = $('#toggle_messege').attr('value', 'Show');
       
    } else if(val == 'Show'){
        $('toggle_messege').attr('value', 'Hide');
    }
});