<?php
if (isset($_POST['string'], $_POST['name'])) {
    $name = $_POST['name'];
    $string = $_POST['string'];

    echo '<strong>', $name, '</strong> says <i>', $string, '</i>';
}
