<?php
//check.php  
$connect = mysqli_connect("localhost", "root", "", "jquery");

if (isset($_POST["search_term"])) {
    $search_term = mysqli_real_escape_string($connect, $_POST["search_term"]);

    if (!empty($search_term)) {
        $search = "SELECT * FROM places WHERE place like '%$search_term%'";
        $result = mysqli_query($connect, $search);
        $result_count = mysqli_num_rows($result);

        $suffix = ($result_count != 1) ? 's' : '';
        echo '<p> Your search for <strong', $search_term, '</strong> returned <strong>', $result_count, '</strong> result', $suffix, '</p>';

        while ($results_row = mysqli_fetch_assoc($result)) {
            echo '<p><strong>', $results_row['place'], '</strong><br>', $results_row['description'], '</p>';
        }
    }
}
