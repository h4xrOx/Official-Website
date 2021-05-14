<template>
  <footer>
    <div class="container">
      <div class="footer-nav">
        <div class="columns">
          <div class="column">
             <h3>Connect Us</h3>
            <ul>
              <li>{{footer.info}}</li>
              <li><hr/></li>
              <li class="columns">
                <div class="column">
                    <ul class="footer-icon">
                      <li v-for="(item) in icon"><a :href="item.url" target="_blank"><i :class="item.icon"></i></a></li>
                    </ul>
                </div>
                <div class="column">
                  <ul>
                    <li>
                      Email: <span>{{footer.email}}</span>
                    </li>
                    <li>Phone: {{footer.tel}}</li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </div>
       <div class="copyright">
         Copyright &copy; {{copyright.year}} All right. {{copyright.name}} Lab Inc.
       </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup(){

    const footer ={
        logo:"footer-logo.png",
        info:"Under the epidemic situation in 2021, we formed this team, which was co-founded by 9 developers from various regions around the world. ",
        email:"notice@asynsense.com",
        tel:"+1 (779) 706 1652"

    }
    const copyright = {
      name:"AsynSense",
      year:"2021"
    }

    const icon = [
      {icon:"fa fa-github",url:"https://github.com/asynsense"},
      {icon:"fa fa-envelope",url:"mailto:notice@asynsense.com"},
      {icon:"fa fa-gamepad",url:"https://discord.gg/kkS3mNVq6Y"},
    ]

    return{
      copyright,footer,icon
    }
  }
}
</script>

<style lang="scss">
  footer{
    background: #2C4755;
    font-family: "Comic Sans MS", sans-serif;
    color:white;
    padding: 30px 0;
    font-size: 14px;
    h3{
      font-size: 2em;
    }
    hr {
      background-color: #426475!important;
      border-radius: 50px;

    }
    .footer-nav{
      padding: 20px 0 50px 0;
      h3{
        padding: 20px 0;
      }

      .footer-icon{
        display: flex;
        li{
          padding: 0 10px;
        }
        a{
          color:white;
          font-size: 20px;
        }
      }
    }
    .copyright{
      text-align: center;
    }
  }
</style>