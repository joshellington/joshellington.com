<?php
if (!$this->data['pjax']) {
  require('_header.php');
}

require('_nav.php');
?>

  <div class="container inner">
    <h1>Say hello.</h1>
    <h2>I'm currently available for freelance work and am open to full-time opportunities. If you're interested in grabbing a coffee (or a spanish coffee), feel free to reach out. I'm in all the usual places.</h2>

    <ul>
      <li><a href="mailto:hello@joshellington.com">hello@joshellington.com</a></li>
      <li><a href="http://linkedin.com/joshellington">LinkedIn</a></li>
      <li><a href="http://github.com/joshellington">GitHub</a></li>
      <li><a href="http://twitter.com/joshellington">Twitter</a></li>
      <li><a href="http://instagram.com/joshellington">Instagram</a></li>
    </ul>

    <br><br><br>
    <h2>Best,<br>Josh</h2>
    <img src="img/josh-ellington.jpg" class="profile" alt="Josh Ellington">
  </div>

<?php
if (!$this->data['pjax']) {
  require('_footer.php');
}
?>