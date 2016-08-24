<?php
error_reporting(0);
$path=date('Ym');
if(!file_exists($path)){mkdir($path,0777);}
$pathurl = $path.'/'.date('d').'.jpg';
if(!is_file($pathurl)){
$str=file_get_contents('http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1');
 if(preg_match("/<urlBase>(.+?)<\/urlBase>/ies",$str,$matches)){
  $imgurl='http://s.cn.bing.com'.$matches[1].'_1920x1080.jpg';
  copy($imgurl,$pathurl);
 }
}
 header('Content-Type: image/JPEG');
  @ob_end_clean();
  @readfile($pathurl);
  @flush(); @ob_flush();
exit();
?>