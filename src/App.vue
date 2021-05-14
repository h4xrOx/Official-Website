<template>
  <Header/>
    <router-view/>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from './components/Header.vue'
import Footer from "./components/Footer.vue";
export default defineComponent({
  name: "App",
  components:{
    Footer,
    Header
  }
});
</script>

<style lang="scss">
  nav{
    font-family: "Comic Sans MS",sans-serif;

  }
  .project{
    font-family: "Courier New",sans-serif;
  }

</style>

