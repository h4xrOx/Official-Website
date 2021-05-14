<template>
  <div class="teammate" id="teammate">
    <div class="container">
      <div class="teammate-title">
        <h1>Teammate</h1>
        <span>Our Teammate List</span>
      </div>
      <ul class="teammate-content">
        <li v-for="(value) in teammate"><img
            :src="value.img?value.img:'https://avatars.githubusercontent.com/u/42311502?v=4'"
            :alt="value.name"><span>{{ value.name }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Teammate",
  setup() {
    const teammate = [
      {name: "DHDJ", img: "https://avatars.githubusercontent.com/u/25525516?v=4"},
      {name: "NaCo", img: "https://avatars.githubusercontent.com/u/42311502?v=4"},
      {name: "Yukine", img: "https://avatars.githubusercontent.com/u/17447826?v=4"},
      {name: "Rainbow", img: "https://q1.qlogo.cn/g?b=qq&nk=3460932868&s=640"},
      {
        name: "Pikachu",
        img: "https://avatars.githubusercontent.com/u/57181519?s=400&u=9f98e9385423a386f412b60e4b0e81b7e911e24e&v=4"
      },
      {name: "Lixworth", img: "https://avatars.githubusercontent.com/u/22554300?v=4"},
      {name: "Spring", img: "https://avatars.githubusercontent.com/u/48492258?v=4"},
    ]

    return {
      teammate
    }
  }
})
</script>

<style lang="scss">
@media screen and (max-width: 768px) {

  .teammate-title {
    h1 {
      font-size: 4em !important;
    }

    span {
      bottom: 0 !important;
    }
  }

}

.teammate {
  padding: 50px 0;
  background: rgba(238, 238, 238, 0.27);
}

.teammate-title {
  text-align: center;
  font-weight: bold;
  position: relative;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 6em;
    color: #ececec;
    font-family: "Myanmar MN", sans-serif;
  }

  span {
    position: absolute;
    bottom: 40px;
    font-family: "Comic Sans MS", sans-serif;
    font-weight: 300;
    font-size: 1.2em;
    color: #2C4755;
  }
}

.teammate-content {
  display: flex;
  flex-wrap: wrap !important;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-radius: 5px;
    margin: 10px;
    height: 40px;
    box-shadow: 0 0 3px #d8d8d8;
    box-sizing: content-box;
    padding: 5px 0;

    img {
      height: 100%;
      border-radius: 50%;
      margin-left: 10px;
    }

    span {
      font-family: "Courier", sans-serif;
      margin: 0 20px;
      display: block;
    }

  }

}
</style>