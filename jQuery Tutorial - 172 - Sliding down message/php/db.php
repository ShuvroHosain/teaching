<?php
//  include("php/init.php");

 // mysqli_connect('jquery', 'localhost', 'root', '');
 // mysqli_select_db('jquery');

   $mysqli = new mysqli("localhost","root","","jquery");



   if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
   }
  

//    if (isset($_POST['name'])) {
//     $username =  $_POST['name'];
//     if (!empty($username)) {
//         // $username_query = mysqli_query("SELECT COUNT(`user_id`) FROM `users` WHERE `username`='$username'");
//         $username_query =  mysql_result(mysql_query("SELECT COUNT(`user_id`) FROM `users` WHERE `name`='{$username}'"));
//     }
//    }
//     session_start();
//     $_SESSION['user_id'] = '1';

//   // Escape special characters, if any
    if (isset($_POST['name'])) {
        // echo 'what';
        $name = mysqli_real_escape_string($mysqli, $_POST['name']);
        $username_query = $mysqli -> query("SELECT COUNT(`user_id`) FROM `users` WHERE `name`='$username'");
       echo ($username_query->num_rows > 0); 
    }

?>