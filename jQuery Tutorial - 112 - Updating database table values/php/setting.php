<?php
//  include("php/init.php");

 // mysqli_connect('jquery', 'localhost', 'root', '');
 // mysqli_select_db('jquery');

   $mysqli = new mysqli("localhost","root","","jquery");
   if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
   }
  
    session_start();
    $_SESSION['user_id'] = '1';

  // Escape special characters, if any
    if (isset($_POST['name'],$_POST['email'])) {
        // echo 'what';
        $name = mysqli_real_escape_string($mysqli, $_POST['name']);
        $email = mysqli_real_escape_string($mysqli, $_POST['email']);
        $update = $mysqli -> query("UPDATE `users` SET `name`= '$name', `email`= '$email' WHERE `user_id`=".$_SESSION['user_id']);
        // $update =mysqli_query("UPDATE `users` SET `name`= '$name' WHERE `user_id`=".$_SESSION['user_id']);
  
        if ($update === true) {
            echo 'Setting has been uploaded.';
        } else if($update === false){
        echo 'There was an error updating your settings.';
        }
    }

?>