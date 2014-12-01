<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();

$extension = pathinfo($_SERVER['SERVER_NAME'], PATHINFO_EXTENSION);

if ($extension == "com") {
  $GLOBALS["root"] = "/";
} else {
  $GLOBALS["root"] = "";
}

$app->get('/', function () use ($app) {
  $app->render('home.php');
});

$app->get('/:slug', function ($slug) use ($app) {
  $pjax = $app->request->headers->get('X-PJAX');
  $app->render($slug.'.php', array('slug' => $slug, 'pjax' => $pjax));
});

$app->run();