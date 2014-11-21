<?php
if (!$this->data['pjax']) {
  require('_header.php');
}
?>

  <div class="container">
    <h1>Hi there, I'm Josh Ellington, a self-taught 26-year-old designer/developer with an affinity for good design, clean code and thoughtful experiences. I currently reside in the beautiful Portland, Oregon and am available for freelance opportunities.</h1>

    <nav class="home">
      <h3><a href="/about">Get to know me &rarr;</a></h3>
      <h3><a href="/projects">Check out my pet projects &rarr;</a></h3>
      <h3><a href="/work">View my work &rarr;</a></h3>
      <h3><a href="/skills">See my skills &rarr;</a></h3>
      <h3><a href="/hello">Say hello &rarr;</a></h3>
    </nav>
  </div>

<?php
if (!$this->data['pjax']) {
  require('_footer.php');
}
?>