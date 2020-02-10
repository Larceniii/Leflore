<?php

if (isset($_GET["symbol"])) { $url = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=".htmlspecialchars($_GET["symbol"]); }
else { die;}

$json = file_get_contents($url);
//$response = json_decode($json, FALSE);

//Generate the proper header for the json format
header('Content-Type: application/json');

//Send the news ticker data to the output in the json format
//echo json_encode($json);
echo $json;
die();
