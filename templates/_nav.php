<header class="sub">
  <nav>
    <ul>
      <li><a href="/">Home &rarr;</a></li>
      <li <?php if ($this->data['slug'] == 'bio') { echo 'class="active"'; } ?>><a href="/bio">Bio &rarr;</a></li>
      <li <?php if ($this->data['slug'] == 'projects') { echo 'class="active"'; } ?>><a href="/projects">Projects &rarr;</a></li>
      <li <?php if ($this->data['slug'] == 'work') { echo 'class="active"'; } ?>><a href="/work">Work &rarr;</a></li>
      <li <?php if ($this->data['slug'] == 'skills') { echo 'class="active"'; } ?>><a href="/skills">Skills &rarr;</a></li>
      <li <?php if ($this->data['slug'] == 'hello') { echo 'class="active"'; } ?>><a href="/hello">Hello &rarr;</a></li>
    </ul>
  </nav>
</header>