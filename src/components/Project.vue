<template>
  <div class="project">
    <img :src="projectInfo.picture" alt="Project Picture" class="project-pic">
    <div class="container">
      <span>Project</span>
      <h1>Everything We Do</h1>
      <div class="columns project-col">
        <div class="column project-list">
          <div class="project-pic-content">
            <div class="project-pic-text">
              <div class="project-icon columns ">
                <h5 class="column ">Support Code language</h5>
               <ul class="column is-four-fifths is-narrow">
                 <li  v-for="(item) in projectList"><i :class="['fa', item.rate>=100?'fa-check':'fa-code']" aria-hidden="true"></i> {{item.name}}<span>{{item.rate}}%</span></li>
               </ul>
              </div>
            </div>
          </div>

        </div>
        <div class="column project-text">
          <h3>{{ projectInfo.smallerTitle }}</h3>
          <h1>{{ projectInfo.title }}</h1>
          <p>{{ projectInfo.post }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  setup() {
    const projectInfo = {
      picture: "banner.jpg",
      smallerTitle: "More Popular Project",
      title: "Just for the professional",
      post: "Under the epidemic situation in 2021, we formed this team, which was co-founded by 9 developers from various regions around the world. We are committed to creating a new fully automated expansion sales platform and third-party paid services. As long as you need to be creative and solid You can join us after you pass our review"
    }

    const projectList =[
      {name:"AsynSense WebSite",rate:100},
      {name:"GameSense Cloud",rate:90},
      {name:"DDOS & CC System",rate:100},
      {name:"OSASP System",rate:80},
    ]
    projectList.sort((a,b)=>b.rate-a.rate);

    return {
      projectInfo,projectList
    }
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 1023px) {
  .container {
    padding: 20px;
  }
  .project{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: auto!important;
      height: 100%;
      max-width: none;
    }

  }
  .project-icon{
    flex-direction: column;
  }

}
@media screen and (max-width: 769px) {

}
.navbar-burger{
  color:white!important;
}
.project{
  padding: 100px 0;
  background-size: 100%;
  color:white;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
    top:0;
    z-index: -1;
    position: absolute;
  }
  h1{
    font-size: 2.17em!important;
  }
  h2{
    font-size: 2.10em!important;
  }
  h3{
    font-size: 1.80em!important;
  }
  h4{
    font-size: 1.42em!important;
  }
  h5{
    font-size: 1.25em!important;
  }
}
.project-col{
  padding: 20px 0;
}
.project-pic-content{
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  backdrop-filter: blur(10px);
  background: rgba(216, 216, 216, 0.06);
}
.project-pic{
  position: absolute;
  z-index: 0;
}
.project-pic-text{
  z-index: 1;
  width: 100%;
  padding: 20px;
}
.project-icon{

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    width: 100%;
    margin: 50px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    color:white;
    background: rgba(0, 0, 0, 0.27);
  }
  li{
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span{
    float: right;
  }
}
.project-text{
  text-shadow: 0 0 3px #000000;

}
.project-text:hover{
  text-shadow: 2px 2px 5px #000000;
}

</style>