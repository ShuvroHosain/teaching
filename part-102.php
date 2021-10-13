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

    <input type="text" id="name"><input type="button" id="button" value="Load">

    <div id="content"></div>

    <script src="js/jquery.min.js"></script>
    <script>
        $('#button').click(function() {
            var name = $('#name').val();
            $.ajax({
                url: 'php/page.php',
                data: 'name=' + name,
                success: function(data) {
                    $('#content').html(data);
                }
            });
        });
    </script>

</body>

</html>