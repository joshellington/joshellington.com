<header class="sub">
  <nav>
    <ul>
      <li><a href="<?php echo $GLOBALS["root"]; ?>/">Home</a></li>
      <li <?php if ($this->data['slug'] == 'about') { echo 'class="active"'; } ?>><a href="<?php echo $GLOBALS["root"]; ?>/about">About</a></li>
      <li <?php if ($this->data['slug'] == 'projects') { echo 'class="active"'; } ?>><a href="<?php echo $GLOBALS["root"]; ?>/projects">Projects</a></li>
      <li <?php if ($this->data['slug'] == 'work') { echo 'class="active"'; } ?>><a href="<?php echo $GLOBALS["root"]; ?>/work">Work</a></li>
      <li <?php if ($this->data['slug'] == 'skills') { echo 'class="active"'; } ?>><a href="<?php echo $GLOBALS["root"]; ?>/skills">Skills</a></li>
      <li <?php if ($this->data['slug'] == 'hello') { echo 'class="active"'; } ?>><a href="<?php echo $GLOBALS["root"]; ?>/hello">Hello</a></li>
    </ul>
  </nav>
</header>