<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <style>

    </style>
</head>

<body>
    <input id="username" type="text"><span id="username_status"></span>

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script>
        $(document).ready(function() {
            $('#username').keyup(function() {
                var username = $(this).val();

                $('#username_status').text('Searching...');

                if (username != '') {
                    $.post('php/username_check.php', {
                        username: username
                    }, function(data) {
                        $('#username_status').text(data);
                    })
                } else {
                    $('#username_status').text('');
                }
            })
        });
    </script>

</body>

</html>