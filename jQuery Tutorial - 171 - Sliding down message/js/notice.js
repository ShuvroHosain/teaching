function slideNotice(text) {
    $('#notification').html('<h3>'+ text + '</h3>').slideDown().delay(1500).slideUp();
}