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
    <input type="text" id="string"><input type="button" id="button" value="Go">
    <div id="feedback"></div>

    <script src="js/jquery.min.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
    <script>
        $('#button').click(function() {
            var string = $('#string').val();
            $.get('php/reverse98.php', {
                input: string
            }, function(data) {
                $('#feedback').text(data);
            });
        });
    </script>

</body>

</html>