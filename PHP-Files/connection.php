<?php

ini_set('upload_max_filesize', '10M');
ini_set('post_max_size', '10M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);

$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "root";
$dbName = "portfolio-data";

$conn = mysqli_connect( $dbServerName, $dbUsername, $dbPassword, $dbName );