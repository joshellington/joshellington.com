<?php
if (!$this->data['pjax']) {
  require('_header.php');
}
?>

  <div class="container">
    <h1>Hi. I'm Josh. I make websites, apps, strategies, logos, wireframes and other internet things in Portland, Oregon. Available for new opportunities.</h1>

    <nav class="home">
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/about">Get to know me <img src="img/chevron-right.svg" height="24" class="home-nav-arrow"></a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/projects">Check out my pet projects <img src="img/chevron-right.svg" height="24" class="home-nav-arrow"></a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/work">View my work <img src="img/chevron-right.svg" height="24" class="home-nav-arrow"></a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/skills">See my skills <img src="img/chevron-right.svg" height="24" class="home-nav-arrow"></a></h3>
      <h3><a href="<?php echo $GLOBALS["root"]; ?>/hello">Say hello <img src="img/chevron-right.svg" height="24" class="home-nav-arrow"></a></h3>
    </nav>
  </div>

<?php
if (!$this->data['pjax']) {
  require('_footer.php');
}
?>