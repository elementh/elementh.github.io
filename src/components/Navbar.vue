<template>
  <nav>
    <ul class="contact">
      <li>
        <a href="mailto:hello@lucasmarino.me?subject=contact">
          <i class="fa fa-envelope fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/elementh">
          <i class="fa fa-github fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="lucasmmarino.gpg-key">
          <i class="fa fa-key fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/lucasmaximilianomarino">
          <i class="fa fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="manifesto.html">
          <i class="fa fa-institution fa-2x"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import 'font-awesome/css/font-awesome.css'

export default {
  name: 'Navbar',
  data () {
    return {}
  }
}
</script>

<style scoped>
nav{
  order: 2;
  color: hsla(203, 100%, 46%, 1);
}
.contact{
  list-style: none;
  margin: 0;
  padding: 0;
}
.contact li {
  margin: 5px;
  padding: 5px;
  display: inline;
  list-style-position: inside;
}
.contact li a {
  color: inherit;
  text-decoration: none;
}
.contact li a:hover i{
  animation: hue 1.5s linear infinite;
}

</style>
