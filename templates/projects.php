<?php
require('_header.php');
require('_nav.php');
?>

  <div class="container inner">
    <h1>Personal projects.</h1>
    <h2>Over the years, I've scratched a few itches of my own. Each of the examples below were designed and developed by yours truly (unless noted otherwise). Consider them all a work in progress.</h2>

    <ul>
      <li>
        <a href="https://github.com/joshellington/BPM">BPM</a>
        <p>I attempt to make music in my spare time and always struggled with finding a simple BPM tapper to match up samples and the like. So I built BPM, a super duper simple iPhone app that allows me to tap and get a BPM measurement within a few seconds. This one allowed me to get my hands dirty with some Objective-C and become a bit more familiar with Xcode. Launching soon.</p>
      </li>

      <li>
        <a href="http://yhack.net">yhack.net</a>
        <p>Hacker News's site design hurts my head and eyes, so I a responsive site that cleans things up a bit. Another Ruby-based scraping experiment, with this one allowing me to work with Redis.</p>
      </li>

      <li>
        <a href="https://github.com/joshellington/Cronwall">Cronwall</a>
        <p>Constantly searching for and downloading desktop wallpapers seemed like a waste of time, so I built Cronwall, a Ruby-based cron task that goes out and automatically does it for me. It's set to the good, publicly-available Tumblr sites I frequent.</p>
      </li>

      <li>
        <a href="https://github.com/joshellington/Vidembed">Vidembed</a>
        <p>After looking for YouTube and Vimeo parsing regexes on Stack Overflow for the umpteenth time, I decided to build this jQuery plugin to keep it all in one place. It also supports Instagram and Facebook embeds. Nothing fancy, but it works.</p>
      </li>

      <li>
        <a href="http://apod.joshellington.com">APOD Viewer</a>
        <p>An experiment that combined my love for scraping public data and space. One of my first forays into building a Ruby-based web application with Heroku.</p>
      </li>

      <li>
        <a href="http://neue.joshellington.com">Rdio Neue</a>
        <p>As an avid (and early beta tester) of Rdio, I found myself spending too much time every Tuesday (new release day) trying to discover new music that I liked. So, I built this experiment to remove the mouse and allow a keyboard-driven navigation system. This one also helped me explore integrating OAuth into a Ruby web app.</p>
      </li>

      <li>
        <a href="http://adventuresinspace.com/">Adventures In Space</a>
        <p>An inspiration blog built with Wordpress and containing 7,500+ unique pieces of content with associated images. Built in collaboration with <a href="http://craigsprecher.com">Craig Sprecher</a>.</p>
      </li>

      <li>
        <a href="http://systematic.herokuapp.com/">Systematic</a>
        <p>An early Sinatra experiment that generates a unique URL with your browser's current setup.</p>
      </li>

      <li>
        <a href="http://phonehome-app.herokuapp.com">Phonehome</a>
        <p>Frustrated with sending links to my phone over email and other clunky ways, I built this itty bitty web app/bookmarklet combo to SMS me the current page I'm viewing. Utilizes more Ruby and some Twilio integration.</p>
      </li>
    </ul>
  </div>

<?php require('_footer.php'); ?>