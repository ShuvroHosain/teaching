<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    <style></style>
</head>

<body>

    Email: <input type="text" id="email"><span id="email_feedback"></span>

    <script src="js/jquery.min.js"></script>
    <script>
        function validate_email(email) {
            $.post('php/email.php', {
                email: email
            }, function(data) {
                // $('#email_feedback').text(data);
                return data;
            });
        }
        $('#email').focusin(function() {
            if ($('#email').val() === '') {
                $('#email_feedback').text('Go on, enter a valid email address....');
            } else {
                var result = validate_email($('#email').val());
            }
        }).blur(function() {
            $('#email_feedback').text('');
        }).keyup(function() {
            var result = validate_email($('#email').val());
        });
    </script>

</body>

</html>