<template>
  <header>
    <img id="avatar" src="https://s.gravatar.com/avatar/211befa21afbe283db9e11e321bcc316?s=512">
    <h1>{{ name }}</h1>
    <h2>{{ description }}</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: 'Lucas Maximiliano Marino',
      description: 'web developer, student and hackathon lover'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  order: 1;
  margin-top: 5rem;
}
header h1{
  color: hsla(203, 100%, 46%, 1);
  margin-bottom: 0;
}
header h1:hover{
  animation: hue 1.5s linear infinite;
}
header h2{
  font-style: italic;
}
#avatar {
  margin: 1rem;
  width: 15rem;
  height: 15rem;
  border-radius: 10%;
}
</style>
