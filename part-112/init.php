<?php
session_start();
$_SESSION['user_id'] = '1';

mysqli_connect('localhost', 'root', '');
mysqli_select_db('jquery');
