<?php
if (!$this->data['pjax']) {
  require('_header.php');
}

require('_nav.php');
?>

  <div class="container inner">
    <h1>My skills.</h1>
    <h2>Although I'm a quick learner, you'll find a list below of technologies and platforms I'm comfortable with at the moment.</h2>

    <ul>
      <li>Ruby, PHP, Node.js, Ruby on Rails, Sinatra</li>
      <li>MySQL, PostgreSQL, Redis, Memcached</li>
      <li>HTML, CSS, JavaScript, CoffeeScript, Processing</li>
      <li>nginx, Apache, SSL certificates, Capistrano, rsync</li>
      <li>Git, SVN, Teamcity</li>
      <li>Wordpress, Tumblr, Squarespace, ExpressionEngine, Craft, ActiveAdmin</li>
      <li>Twitter API, Facebook API, Instagram API, and many more</li>
      <li>Grunt, Guard, Gulp</li>
      <li>Ubuntu, zsh, CLI in general</li>
      <li>Sublime Text, Xcode</li>
      <li>Sketch, Photoshop, Illustrator</li>
      <li>Raspberry Pi, Arduino, Kinect</li>
      <li>Objective-C, Cordova (aka Phonegap)</li>
    </ul>

    <h3 class="inline">And here's a few I'm working on sharpening.</h3>

    <ul>
      <li>React, Ember, Angular</li>
      <li>Python, Django, Go, Java</li>
      <li>Android SDK, Tizen, Apple Watch SDK</li>
      <li>Premiere, Reason</li>
    </ul>
  </div>

<?php
if (!$this->data['pjax']) {
  require('_footer.php');
}
?>