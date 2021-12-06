<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css">
    <style>
        /* body {
            font-size: 12px;
        }
        #tabs {
            width: 400px;
        } */
    </style>
</head>

<body>
    <div id="tabs">
        <ul>
            <li><a href="#about-me">About me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="php/loop.php">Loop</a></li>
        </ul>
        <div id="about-me">
            <p>A short paragraph about me</p>
        </div>
        <div id="portfolio">
            <p>This is my portfolio</p>
        </div>
        <div id="contact">
            <p>My contact details</p>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <script>
        $(document).ready(function() {
            $("#tabs").tabs({
                ajaxOptions: {
                    error: function(xhr, index, status, anchor) {
                        $(anchor.hash).text('Could not load page');
                    }
                }
            }).find('.ui-tabs-nav').sortable({
                axis: 'x'
            });
        });
    </script>

</body>

</html>