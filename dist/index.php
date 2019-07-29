<?php

error_reporting(-1);
ini_set('display_errors','On');

$REQUEST_URI = $_SERVER['REQUEST_URI'];
$REQUEST_URI_PARAMETERS = explode('/', $REQUEST_URI);

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

$TITLE = '"TRIANON | '.$DESCRIPTION_VALUE.' '.$COLOR_VALUE.' '.$GENDER_VALUE.' '.$LINE_VALUE.' '.' FABRICACIóN DE MARROQUINERíA Y ACCESORIOS EN CUERO "';
$DESCRIPTION = '"TRIANON | MANUFACTURA 100% COLOMBIANA, UNA TRADICIóN DESDE 1935."';
$IMAGE_SRC = '"https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2F'.$PHOTO_VALUE.'?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01"';


$vue_pwa_html_template = file_get_contents("index.html");
$vue_pwa_html_meta_title= '"TRIANON | Fabricación de marroquinería y accesorios en cuero"';
$vue_pwa_html_meta_author = '"JORGE LUIS MAYORGA TABORDA"';
$vue_pwa_html_meta_description = $DESCRIPTION;
$vue_pwa_html_meta_image = $IMAGE_SRC;
$vue_pwa_html_meta_keywords= '"billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"';

$vue_pwa_html_meta_schema_name = $TITLE;
$vue_pwa_html_meta_schema_description = $DESCRIPTION;
$vue_pwa_html_meta_schema_image = $IMAGE_SRC;

$vue_pwa_html_meta_twitter_title = $TITLE;
$vue_pwa_html_meta_twitter_card = '"summary"';
$vue_pwa_html_meta_twitter_description =  $DESCRIPTION;

$vue_pwa_html_meta_og_title = $TITLE;
$vue_pwa_html_meta_og_description = $DESCRIPTION;
$vue_pwa_html_meta_og_image = $IMAGE_SRC;
$vue_pwa_html_meta_og_url = '"https://www.trianon.com.co/"';
$vue_pwa_html_meta_og_site_name = '"TRIANON"';

$vue_pwa_html_template = str_replace("@{META_TITLE}", $vue_pwa_html_meta_title, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_AUTHOR}", $vue_pwa_html_meta_author, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_KEYWORDS}", $vue_pwa_html_meta_keywords, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_DESCRIPTION}", $vue_pwa_html_meta_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_IMAGE}", $vue_pwa_html_meta_image, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace("@{META_SCHEMA_NAME}",  $vue_pwa_html_meta_schema_name, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_SCHEMA_DESCRIPTION}",  $vue_pwa_html_meta_schema_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_SCHEMA_IMAGE}",  $vue_pwa_html_meta_schema_image, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace("@{META_TWITTER_TITLE}",  $vue_pwa_html_meta_twitter_title, $vue_pwa_html_template);
$vue_pwa_html_template= str_replace("@{META_TWITTER_CARD}",  $vue_pwa_html_meta_twitter_card, $vue_pwa_html_template);
$vue_pwa_html_template= str_replace("@{META_TWITTER_DESCRIPTION}",  $vue_pwa_html_meta_twitter_description, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace("@{META_OG_TITLE}",  $vue_pwa_html_meta_og_title, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_DESCRIPTION}",  $vue_pwa_html_meta_og_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_IMAGE}",  $vue_pwa_html_meta_og_image, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_URL}",  $vue_pwa_html_meta_og_url, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_SITE_NAME}",  $vue_pwa_html_meta_og_site_name, $vue_pwa_html_template);

echo $vue_pwa_html_template ;


/*





$vue_pwa_html_template = file_get_contents('./index.html');

$vue_pwa_html_meta_title= '"TRIANON | Fabricación de marroquinería y accesorios en cuero"';
$vue_pwa_html_meta_author = '"JORGE LUIS MAYORGA TABORDA"';
$vue_pwa_html_meta_description = $DESCRIPTION;
$vue_pwa_html_meta_image = $IMAGE_SRC;
$vue_pwa_html_meta_keywords= '"billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"';

$vue_pwa_html_meta_schema_name = $TITLE;
$vue_pwa_html_meta_schema_description = $DESCRIPTION;
$vue_pwa_html_meta_schema_image = $IMAGE_SRC;

$vue_pwa_html_meta_twitter_title = $TITLE;
$vue_pwa_html_meta_twitter_card = '"summary"';
$vue_pwa_html_meta_twitter_description =  $DESCRIPTION;

$vue_pwa_html_meta_og_title = $TITLE;
$vue_pwa_html_meta_og_description = $DESCRIPTION;
$vue_pwa_html_meta_og_image = $IMAGE_SRC;
$vue_pwa_html_meta_og_url = '"https://www.trianon.com.co/"';
$vue_pwa_html_meta_og_site_name = '"TRIANON"';

$vue_pwa_html_template = str_replace("@{META_TITLE}", $vue_pwa_html_meta_title, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_AUTHOR}", $vue_pwa_html_meta_author, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_KEYWORDS}", $vue_pwa_html_meta_keywords, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_DESCRIPTION}", $vue_pwa_html_meta_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_IMAGE}", $vue_pwa_html_meta_image, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace("@{META_SCHEMA_NAME}",  $vue_pwa_html_meta_schema_name, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_SCHEMA_DESCRIPTION}",  $vue_pwa_html_meta_schema_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_SCHEMA_IMAGE}",  $vue_pwa_html_meta_schema_image, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace("@{META_TWITTER_TITLE}",  $vue_pwa_html_meta_twitter_title, $vue_pwa_html_template);
$vue_pwa_html_template= str_replace("@{META_TWITTER_CARD}",  $vue_pwa_html_meta_twitter_card, $vue_pwa_html_template);
$vue_pwa_html_template= str_replace("@{META_TWITTER_DESCRIPTION}",  $vue_pwa_html_meta_twitter_description, $vue_pwa_html_template);
 
$vue_pwa_html_template = str_replace("@{META_OG_TITLE}",  $vue_pwa_html_meta_og_title, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_DESCRIPTION}",  $vue_pwa_html_meta_og_description, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_IMAGE}",  $vue_pwa_html_meta_og_image, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_URL}",  $vue_pwa_html_meta_og_url, $vue_pwa_html_template);
$vue_pwa_html_template = str_replace("@{META_OG_SITE_NAME}",  $vue_pwa_html_meta_og_site_name, $vue_pwa_html_template);


 $vue_pwa_html_meta_URL = $_SERVER['REQUEST_URI'];
$vue_pwa_html_template = str_replace("@{META_PHP_URL}",  $vue_pwa_html_meta_URL, $vue_pwa_html_template);
*/



 


?>