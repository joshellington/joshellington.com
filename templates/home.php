<?php
if (!$this->data['pjax']) {
  require('_header.php');
}
?>

  <div class="container">
    <h1>Hi there, I'm Josh Ellington, a self-taught 26-year-old designer/developer with an affinity for good design, clean code and thoughtful experiences. I currently reside in the beautiful Portland, Oregon and am available for freelance opportunities.</h1>

    <nav class="home">
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/about">Get to know me &rarr;</a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/projects">Check out my pet projects &rarr;</a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/work">View my work &rarr;</a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/skills">See my skills &rarr;</a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/hello">Say hello &rarr;</a></h3>
    </nav>
  </div>

<?php
if (!$this->data['pjax']) {
  require('_footer.php');
}
?>