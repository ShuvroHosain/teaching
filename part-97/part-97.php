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
    <input type="text" id="string"><input type="button" value="Go">

    <script src="js/jquery.min.js"></script>
    <script>
        $('#button').click(function() {
            var string = $('#string').val();
            $.get('php/reverse.php');
        });
    </script>

</body>

</html>