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
    Start Searching: <input id="search" type="text">

    <div id="search_results"></div>

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script>
        $(document).ready(function() {
            $('#search').keyup(function() {
                var search_term = $(this).val();

                $.post('php/search.php', {
                    search_term: search_term
                }, function(data) {
                    $('#search_results').html(data);
                });
            });
        });
    </script>

</body>

</html>