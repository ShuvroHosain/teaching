<?php
include 'init.php';

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $sql = "UPDATE user SET name ='$name' WHERE user_id =" . $_SESSION['user_id'];
    // $update = mysql_query("UPDATE 'user' SET 'name'='$name' WHERE 'user_id'=" . $_SESSION['user_id']);
    if ($conn->query($sql) === true) {
        echo 'Settings have been updated';
    } else if ($conn->query($sql) === false) {
        echo 'There was an error updating your settings.';
    }
}
