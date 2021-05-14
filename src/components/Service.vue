<template>
  <div class="service">
    <div class="container">
      <div class="service-title">
        <h1>Service</h1>
        <span>Just We can Support Service</span>
      </div>
      <ul class="service-content">
          <li v-for="(item) in service">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: "Service",
  setup(){
    const service = [
      {name:"TypeScript"},
      {name:"JavaScript"},
      {name:"Golang"},
      {name:"Java"},
      {name:"LUA"},
      {name:"C++"},
      {name:"PHP"},
    ]

    return{
      service
    }
  }
})
</script>

<style lang="scss">
@media screen and (max-width: 768px) {

  .service-title{
    h1{
      font-size: 4em!important;
    }
    span{
      bottom: 0!important;
    }
  }

}
.service{
  padding: 50px 0;
}
  .service-title{
    text-align: center;
    font-weight: bold;
    position: relative;
    display: flex;
    justify-content: center;
    h1{
      font-size: 7em;
      color: #ececec;
      font-family: "Myanmar MN", sans-serif;

    }
    span{
      position: absolute;
      bottom:45px;
      font-family: "Comic Sans MS",sans-serif;
      font-weight: 300;
      font-size: 1.2em;
      color:#2C4755;
    }
  }
  .service-content{
    display: flex;
    flex-wrap: wrap !important;
    li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      border-radius: 5px;
      margin: 10px;
      height: 40px;
      font-family: "Comic Sans MS", sans-serif;
      box-shadow: 0 0 3px #d8d8d8;
      box-sizing: content-box;
      padding: 0 10px;
    }
  }
</style>