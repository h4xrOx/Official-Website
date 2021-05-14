<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item header-logo">
          <img :src="site.logo" alt="">
          <h1>{{ site.title }}</h1>
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="item.url" v-for="(item) in pageList" class="navbar-item">{{ item.name }}</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button joined" href="https://discord.gg/kkS3mNVq6Y" target="_blank">
                <strong>Join US</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header",
  setup() {

    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });


    const site = {
      logo: "/logo.png",
      title: "AsynSense"
    }
    const pageList = [
      {name: "Home", url: "/"},
      // {name: "About", url: "/"},
    ]

    return {
      pageList, site
    }


  }
})
</script>

<style lang="scss">
@media screen and (max-width: 1023px) {

  .navbar-menu {
    box-shadow: none!important;
    background-color: transparent!important;
  }
}
body {
  position: relative;
}

.navbar {
  position: fixed!important;
  width: 100%;
  top:0;
  box-shadow: 0 0 3px #000000;
  background: rgba(60, 60, 60, 0.25) !important;
  backdrop-filter: blur(10px);
  color:white;
}
.navbar-item, .navbar-link{
  color:white!important;
}
.navbar-start > .router-link-active {

  backdrop-filter: blur(50px);
  color: white !important;
}

.header-logo h1 {
  padding: 0 20px;
}
.joined{
  color:white!important;
  backdrop-filter: blur(50px);
  background-color: rgba(10, 12, 14, 0.38) !important;
  border: none!important;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active{
  background-color: rgba(216, 216, 216, 0.22) !important;
}
</style>