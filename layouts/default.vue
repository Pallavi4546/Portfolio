<template>
  <div>
    <b-navbar :fixed-top="true"  :class="dark ? 'darkMode': 'color'">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <div class="portfolio">PORTFOLIO</div>
            </b-navbar-item>
        </template>
        <template #end  >
         <b-navbar-item
         style=" background:#ec255a;
  border:none;
  border-radius:4%;
 font-weight:700px;"
         class=" navbar2"
               @click="setLightMode"
                v-model="dark"
               >
                {{ dark ? "Dark Mode" : "Light Mode" }}
            </b-navbar-item>
            <b-navbar-item href="/" class="navbar2">
                Home
            </b-navbar-item>
            <b-navbar-item href="#About" class="navbar2">
                About
            </b-navbar-item>
            <b-navbar-item href="#Resume" class="navbar2">
                Resume
            </b-navbar-item>
            <b-navbar-item href="#Projects" class="navbar2">
                Projects
            </b-navbar-item>
             <b-navbar-item href="#Contact" class="navbar2">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
      <div>
        <Nuxt />
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'DefaultLayout',
  data() {
    return {
      darkMode:false
    }
  },
   computed: {
      ...mapState(['dark'])
    },
  mounted(){
    if(localStorage.getItem("darkMode") == undefined){
      this.darkMode = false
    }
    else{
      this.darkMode = JSON.parse(localStorage.getItem("darkMode"))
    }
   this.SET_DARK(this.darkMode);
  },
  methods:{
    ...mapMutations(['SET_DARK']),
    setLightMode(){
      this.darkMode = !this.darkMode
      localStorage.setItem("darkMode",this.darkMode)
      this.SET_DARK(this.darkMode);
    }
  }
}
</script>
<style >

.navbar .navbar-item:hover{
  background:#ec255a;
  border:none;
  border-radius:5%;
 font-weight:700px;
 color:white
}
.portfolio{
  font-size: 40px;
  color: #EC255A;
}
.color{
   background: linear-gradient(110deg, #161853 70.6%, #292C6D 60%);
}
.darkMode{
  background : black
}
.navbar2{
  color:#FAEDF0;
   font-size: 24px;
    margin:12px
}
@media only screen and (max-width: 1669px) {
.color{
   background: #161853
}
}
@media only screen and (max-width: 1023px) {
.navbar-menu {
    background-color: transparent;
    -webkit-box-shadow: 0 8px 16px rgb(10 10 10 / 10%);
    box-shadow: 0 8px 16px rgb(10 10 10 / 10%);
    padding: 0.5rem 0;
}
}
@media only screen and (max-width: 350px) {
 .default{
  margin:0px
 }
}
</style>

