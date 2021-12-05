<?php 
$servername = "localhost";
$username = "root";
$password = "";
$data = 'jquery';
// Create connection
$conn = new mysqli($servername, $username, $password, $data);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


    function user_joined($name){
      $name = $name;
      $sql = "INSERT INTO `users` WHERE VALUES('$name')";
      // $result = $conn->query($sql);
      echo $sql;
    }
    if (isset($_POST['name'], $_POST['action'])) {
        $name = $_POST['name'];
        $action = $_POST['action'];
        echo $name;
        if($action == 'joined'){
          user_joined($name);
        }






        
        // if (!empty($search)) {
        //     $sql = "SELECT `name`, `email` FROM `users` WHERE `email` LIKE '%$search%'";
        //     $result = $conn->query($sql);
        //     $rowcount=mysqli_num_rows($result);
        //     $suffix = ($rowcount != 1) ? 's': '';
        //     echo " Your Search For " . $search. ' return '. $rowcount . ' result'. $suffix;
        //     // die;
        //     if ($result->num_rows > 0) {
        //       while($row = $result->fetch_assoc()) {
        //         echo " Name: " . $row["name"]. " " . $row["email"]. "<br>";
        //       }
        //     } else {
        //       echo "0 results";
        //     }
        //     $conn->close();

        // }
    }

?>