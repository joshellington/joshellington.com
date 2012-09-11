<?php

$access_token = '2190005.1af783f.96821453e2b64a298a80a54f10076b2b';
$url = 'https://api.instagram.com/v1/users/2190005/media/recent?access_token='.$access_token.'&count=200';

$res = json_decode(file_get_contents($url), true);
$res_data = $res['data'];

if ($res['pagination']['next_url']) {
  $next_url = $res['pagination']['next_url'];
  $res_2 = json_decode(file_get_contents($next_url), true);
  $res_2_data = $res_2['data'];
}

foreach($res_2_data as $r) {
  array_push($res_data, $r);
}

header('Content-type: application/json');
echo json_encode($res_data);