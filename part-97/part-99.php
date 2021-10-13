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
    <p><input type="text" id="name"></p>
    <p><textarea id="string" rows="7" cols="25"></textarea></p>
    <input type="button" id="button" value="Go">

    <div id="feedback"></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $('#button').click(function() {
            var name = $('#name').val();
            var string = $('#string').val();

            $.post('php/reverse99.php', {
                string: string,
                name: name
            }, function(data) {
                $('#feedback').html(data);
            });
        });
    </script>

</body>

</html>