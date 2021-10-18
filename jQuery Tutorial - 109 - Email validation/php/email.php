<?php
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        if (!empty($email)) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE) {
               echo 'This is not a Valide email';
            } else{
               echo 'Valide email address';
            }
        }
    }
?>