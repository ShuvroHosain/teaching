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

    <h3>Settings</h3>

    <p> Name: <input type="text" name="" id="name"></p>
    <p>
        <input type="button" id="save_button" value="Save">
        <span id="save_status"></span>
    </p>

    <script src="js/jquery.min.js"></script>
    <script>
        $('#save_button').click(function() {
            // grab values
            var name = $('#name').val();
            // show loading text
            $('#save_status').text('Loading...');
            // perform http request
            $.post('settings.php', {
                name: name
            }, function(data) {
                $('#save_status').text(data);
            });
        });
    </script>

</body>

</html>