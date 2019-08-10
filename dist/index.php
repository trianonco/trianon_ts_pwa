<?php

header("Expires: Tue, 01 Jan 2000 00:00:00 GMT");
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Content-Type: application/xml; charset=utf-8");

$REQUEST_URI = $_SERVER['REQUEST_URI'];
$REQUEST_URI_PARAMETERS = explode('/', $REQUEST_URI);

$isProductURL = (array_search('gender', $REQUEST_URI_PARAMETERS )  == 0) ? false : true;

if($isProductURL){
  $GENDER_KEY = array_search('gender', $REQUEST_URI_PARAMETERS ) + 1;
  $CATEGORY_KEY = array_search('category', $REQUEST_URI_PARAMETERS ) + 1;
  $DESCRIPTION_KEY = array_search('description', $REQUEST_URI_PARAMETERS ) + 1;
  $COLOR_KEY = array_search('color', $REQUEST_URI_PARAMETERS ) + 1;
  $LINE_KEY = array_search('line', $REQUEST_URI_PARAMETERS ) + 1;
  $PHOTO_KEY = array_search('photo', $REQUEST_URI_PARAMETERS ) + 1;

  $GENDER_VALUE = urldecode($REQUEST_URI_PARAMETERS[$GENDER_KEY]);
  $CATEGORY_VALUE = urldecode($REQUEST_URI_PARAMETERS[$CATEGORY_KEY]);
  $DESCRIPTION_VALUE = urldecode($REQUEST_URI_PARAMETERS[$DESCRIPTION_KEY]);
  $COLOR_VALUE = urldecode($REQUEST_URI_PARAMETERS[$COLOR_KEY]);
  $LINE_VALUE = urldecode($REQUEST_URI_PARAMETERS[$LINE_KEY]);
  $PHOTO_VALUE = urldecode($REQUEST_URI_PARAMETERS[$PHOTO_KEY]);

  $TITLE = 'TRIANON ** | '.$DESCRIPTION_VALUE.' '.$COLOR_VALUE.' '.$GENDER_VALUE.' '.$LINE_VALUE.' '.' FABRICACIÓN DE MARROQUINERÍA Y ACCESORIOS EN CUERO ';
  $DESCRIPTION = 'TRIANON | MANUFACTURA 100% COLOMBIANA, UNA TRADICIÓN DESDE 1935. ';
  $IMAGE_SRC = 'https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2F'.$PHOTO_VALUE.'?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01';

}else{
  $TITLE = 'TRIANON **  | FABRICACIÓN DE MARROQUINERÍA Y ACCESORIOS EN CUERO ';
  $DESCRIPTION = 'TRIANON | MANUFACTURA 100% COLOMBIANA, UNA TRADICIóN DESDE 1935. ';
  $IMAGE_SRC = 'https://www.trianon.com.co/img/logo.01e54327.png';
}

$vue_pwa_html_meta_title= $TITLE;
$vue_pwa_html_meta_author = 'jl.mayorga236@gmail.com';
$vue_pwa_html_meta_description = $DESCRIPTION;
$vue_pwa_html_meta_image = $IMAGE_SRC;
$vue_pwa_html_meta_keywords= 'billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete';

$vue_pwa_html_meta_schema_name = $TITLE;
$vue_pwa_html_meta_schema_description = $DESCRIPTION;
$vue_pwa_html_meta_schema_image = $IMAGE_SRC;

$vue_pwa_html_meta_twitter_title = $TITLE;
$vue_pwa_html_meta_twitter_card = 'summary';
$vue_pwa_html_meta_twitter_description =  $DESCRIPTION;

$vue_pwa_html_meta_og_title = $TITLE;
$vue_pwa_html_meta_og_description = $DESCRIPTION;
$vue_pwa_html_meta_og_image = $IMAGE_SRC;
$vue_pwa_html_meta_og_url = 'https://www.trianon.com.co/';
$vue_pwa_html_meta_og_site_name = '"TRIANON"';



$vue_pwa_html_template = file_get_contents("index-app.html");


$vue_pwa_html_template = str_replace('<title>TRIANON | Productos 100% colombianos</title>', '<title>'.$vue_pwa_html_meta_title.'</title>', $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META AUTHOR', $vue_pwa_html_meta_author, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META KEYWORDS', $vue_pwa_html_meta_keywords, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META DESCRIPTION', $vue_pwa_html_meta_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META IMAGE', $vue_pwa_html_meta_image, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace('META SCHEMA NAME',  $vue_pwa_html_meta_schema_name, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META SCHEMA DESCRIPTION',  $vue_pwa_html_meta_schema_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META SCHEMA IMAGE',  $vue_pwa_html_meta_schema_image, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace('META TWITTER TITLE',  $vue_pwa_html_meta_twitter_title, $vue_pwa_html_template);
$vue_pwa_html_template= str_replace('META TWITTER CARD',  $vue_pwa_html_meta_twitter_card, $vue_pwa_html_template);
$vue_pwa_html_template= str_replace('META TWITTER DESCRIPTION',  $vue_pwa_html_meta_twitter_description, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace('META OG TITLE',  $vue_pwa_html_meta_og_title, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META OG DESCRIPTION',  $vue_pwa_html_meta_og_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META OG IMAGE',  $vue_pwa_html_meta_og_image, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META OG URL',  $vue_pwa_html_meta_og_url, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace('META OG SITE NAME',  $vue_pwa_html_meta_og_site_name, $vue_pwa_html_template);

//echo $vue_pwa_html_template ;
echo 'Test Trianon';

?>