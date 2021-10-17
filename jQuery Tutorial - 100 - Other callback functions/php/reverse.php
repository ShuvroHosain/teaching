<?php
if (isset($_POST['name'], $_POST['address'])) {
    $name = $_POST['name'];
    $address = $_POST['address'];

    echo '<strong>', $name, ' </strong><i>', $address , '</i>';
}
?>