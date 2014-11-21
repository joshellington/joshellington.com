<header class="sub">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li <?php if ($this->data['slug'] == 'about') { echo 'class="active"'; } ?>><a href="/about">About</a></li>
      <li <?php if ($this->data['slug'] == 'projects') { echo 'class="active"'; } ?>><a href="/projects">Projects</a></li>
      <li <?php if ($this->data['slug'] == 'work') { echo 'class="active"'; } ?>><a href="/work">Work</a></li>
      <li <?php if ($this->data['slug'] == 'skills') { echo 'class="active"'; } ?>><a href="/skills">Skills</a></li>
      <li <?php if ($this->data['slug'] == 'hello') { echo 'class="active"'; } ?>><a href="/hello">Hello</a></li>
    </ul>
  </nav>
</header>