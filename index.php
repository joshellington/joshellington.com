<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();

$app->get('/', function () use ($app) {
  $app->render('home.php');
});

$app->get('/:slug', function ($slug) use ($app) {
  $pjax = $app->request->headers->get('X-PJAX');
  $app->render($slug.'.php', array('slug' => $slug, 'pjax' => $pjax));
});

$app->run();