<?php
include 'init.php';

if (isset($_POST['name'])) {
    $name = mysql_real_escape_string(htmlentities($_POST['name']));
}
