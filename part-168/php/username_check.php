<?php
//check.php  
$connect = mysqli_connect("localhost", "root", "", "jquery");
if (isset($_POST["username"])) {
    $username = mysqli_real_escape_string($connect, $_POST["username"]);
    $query = "SELECT * FROM user WHERE username = '" . $username . "'";
    $result = mysqli_query($connect, $query);
    $username_result = mysqli_num_rows($result);

    if ($username_result == 0) {
        echo 'Username available!';
    } else if ($username_result == 1) {
        echo 'Sorry, that username is taken.';
    }
}
