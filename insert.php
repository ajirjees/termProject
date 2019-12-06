<?php
//Create a database connection
$con = mysqli_connect(DB Server,User cPanel, cPanel password);
if (!$con)
{
	die('Could not connect: ' . mysqli_error());
}
//Select a database to use 
mysqli_select_db($con, "ammarj18_contact");
//select table and insert
$sql="INSERT INTO contact (email, message, contactWay, phone,name)
VALUES
('$_POST[email]','$_POST[message]','$_POST[contactWay]','$_POST[phone]','$_POST[name]')";
if (!mysqli_query($con,$sql))
{
	die('Error: ' . mysqli_error());
}
mysqli_close($con);
?>