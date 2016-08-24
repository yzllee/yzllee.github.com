<?php
error_reporting(0);
$dir=date('Ym').'/';
$file=scandir($dir);
$filenums=count($file)-2;
srand((double)microtime()*1000000);
$fileurl=rand(1,$filenums);
header('Content-Type: image/JPEG');
  @ob_end_clean();
  @readfile(date('Ym').'/'.sprintf("%02d", $fileurl).'.jpg');
  @flush(); @ob_flush();
exit();
?>