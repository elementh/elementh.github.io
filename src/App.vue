<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:300');
html {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    hsla(0, 0%, 96%, 1) 0%,
    hsla(40, 4%, 95%, 1) 100%
  );
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-flow: column;
  color: hsla(0, 0%, 13%, 1);
  margin-top: 60px;
}
/* ============= FORK ME ON GITHUB =========== */
.octicon {
  color: hsla(0, 0%, 96%, 1);
  position: fixed;
  top: 0;
  border: 0;
  right: 0;
  fill:hsla(203, 100%, 46%, 1);
}
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
.github-corner:hover .octicon {
  animation: hue-fill 1.5s linear infinite;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

/* =========================================== */
/* ANIMATIONS */
@keyframes hue {
  0% {color: hsla(0, 50%, 50%, 1);}
  10% {color: hsla(30, 50%, 50%, 1);}
  20% {color: hsla(60, 50%, 50%, 1);}
  30% {color: hsla(90, 50%, 50%, 1);}
  40% {color: hsla(120, 50%, 50%, 1);}
  50% {color: hsla(150, 50%, 50%, 1);}
  60% {color: hsla(180, 50%, 50%, 1);}
  70% {color: hsla(210, 50%, 50%, 1);}
  80% {color: hsla(240, 50%, 50%, 1);}
  90% {color: hsla(270, 50%, 50%, 1);}
  100% {color: hsla(0, 50%, 50%, 1);}

}
@keyframes hue-fill {
  0% {fill: hsla(0, 50%, 50%, 1);}
  10% {fill: hsla(30, 50%, 50%, 1);}
  20% {fill: hsla(60, 50%, 50%, 1);}
  30% {fill: hsla(90, 50%, 50%, 1);}
  40% {fill: hsla(120, 50%, 50%, 1);}
  50% {fill: hsla(150, 50%, 50%, 1);}
  60% {fill: hsla(180, 50%, 50%, 1);}
  70% {fill: hsla(210, 50%, 50%, 1);}
  80% {fill: hsla(240, 50%, 50%, 1);}
  90% {fill: hsla(270, 50%, 50%, 1);}
  100% {fill: hsla(0, 50%, 50%, 1);}
}
</style>
