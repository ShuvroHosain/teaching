<?php
    if (isset($_POST['name'], $_POST['textarea'])) {
        $name =  $_POST['name'];
        $textarea =  $_POST['textarea'];
        echo '<strong>', $name, '</strong> <i>', $textarea, '</i>';
    }

?>