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
    <a class="menu_top" href="pages/home.php">Home</a> /
    <a class="menu_top" href="pages/portfolio.php">Portfolio</a> /
    <a class="menu_top" href="pages/contact.php">Contact</a>

    <div id="content_area"></div>

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script>
        $(document).ready(function() {
            $('#content_area').load($('.menu_top:first').attr('href'));

            $('.menu_top').click(function() {
                var href = $(this).attr('href');
                // alert(href);
                $('#content_area').hide().load(href).fadeIn('normal');
                return false;
            })
        });
    </script>

</body>

</html>