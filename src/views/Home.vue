<template>
  <Project/>
  <Service/>
  <Custom/>
  <Teammate/>
</template>

<script>
import Project from '../components/Project.vue'
import Service from "../components/Service.vue";
import Teammate from "../components/Teammate.vue";
import Custom from "../components/Custom.vue";
export default {
  name: "Home",
  components:{
    Custom,
    Teammate,
    Project,Service
  }
}
</script>

<style scoped>

</style>