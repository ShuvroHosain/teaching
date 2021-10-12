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

    <input id="button" type="button" value="Load">
    <div id="content"></div>

    <script src="js/jquery.min.js"></script>
    <script>
        $('#button').click(function() {
            $('#content').load('page.php');
        });
    </script>

</body>

</html>