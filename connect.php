<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "CODEHELPI";
$conn = mysqli_connect($servername,$username,$password,$database);
if (!$conn) {
    die(mysqli_error($conn));
}
?>