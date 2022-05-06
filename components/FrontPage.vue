<template>
  <div  :class = "dark ? 'dark': 'panel '" >
    <div class="columns" data-color="blue">
      <div class="column image-background1 " data-aos="zoom-in" data-aos-duration="3000">
        <!-- <div class="card"> -->
        <img
        class="image"
          src="@/assets/Images/Pallavi - 1.png"
        >
        <!-- </div> -->
      </div>
      <div class="column image-background2">
        <div
          class="name has-text-centered"
          data-aos="slide-down"
          data-aos-duration="700"
        >
          I'M PALLAVI UPADRISTA
        </div>
        <div
          class="profession has-text-centered"
          data-aos="slide-down"
          data-aos-duration="800"
        >
          WEB DEVELOPER
        </div>
        <div
          class="paragraph has-text-centered"
          data-aos="slide-down"
          data-aos-duration="900"
        >
          I'm a web developer focused on crafting clean & user‑friendly
          experiences, I am passionate about building excellent interface that
          improves the lives of those around me.
        </div>
        <b-button
          :class="dark ? 'darkMoreButton':'moreButton p-5 has-text-centered' "
          data-aos="slide-down"
          data-aos-duration="1000"
        >
          <a  href="#About" style='color:white'>MORE ABOUT ME</a>
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
  data() {
    return {
    }
  },
   computed: {
      ...mapGetters(['dark'])
    },
}
</script>
 <style scoped>
.columns{
  margin:0px
}
.panel {
  background: linear-gradient(110.9deg, #161853 60%, #292c6d 60%);
  border-radius:0px;
  padding: 40px;
}
.dark{
  background:linear-gradient(109.7deg, black 60%, black 60%);
   padding: 40px;
}
.name {
  font-size: 50px;
  justify-content: center;
  justify-items: center;
  color: #ec255a;
  font-weight: bold;
}
    .moreButton {
  display:flex;
  margin: 30px auto;
  background:transparent;
  cursor:pointer;
  color:white;
  border:1px solid #ec255a;
} 
.darkMoreButton{
  display:flex;
  margin: 30px auto;
  background:transparent;
  cursor:pointer;
  color:white;
  border:1px solid #ec255a;
}
.profession {
  display:block;
  font-size: 50px;
  justify-content: center;
  justify-items: center;
  color: #faedf0;
  font-weight: bold;
  text-align: center;
}
.paragraph {
  font-size: 22px;
  justify-content: center;
  justify-items: center;
  color: #faedf0;
  padding: 40px;
  margin-bottom: 40px;
  margin-left: 40px;
  margin-right: 40px;
}
.image {
  max-height: 82%;
  max-width: 82%;
  margin: 40px;
}
.image-background1 {
  padding-left: 30px;
}
.image-background2 {
  padding-top: 90px;
  margin-top: 90px;
}

button:hover{
  background:#ec255a;
  border:none;
 font-weight:700px
}
@media only screen and (max-width: 1315px) {
.name {
  font-size: 35px;
}
.profession {
  font-size: 35px;
}
.paragraph {
  font-size: 18px;
  justify-content: center;
  justify-items: center;
  color: #faedf0;
  padding: 40px;
  margin-bottom: 35px;
  margin-left: 35px;
  margin-right: 35px;
}
}
@media only screen and (max-width: 1060px) {
.image {
  max-height: 100%;
  max-width: 100%;
}

.name {
  font-size: 30px;
}
.profession {
  font-size: 30px;
}
.paragraph {
  font-size: 18px;
  justify-content: center;
  justify-items: center;
  color: #faedf0;
  padding: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
}
@media only screen and (max-width: 769px) {
    .image {
  max-height: 80%;
  max-width: 80%;
}
.image-background1 {
  padding: 10px;
}
.image-background1 {
  padding: 0px;
}
.image-background2 {
  padding: 0px;
  margin-top: 0px;
}

.name {
  font-size: 25px;
}
.profession {
  font-size: 25px;
}
.paragraph {
  font-size: 18px;
  justify-content: center;
  justify-items: center;
  color: #faedf0;
  padding: 20px;
  margin-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
}
}
@media only screen and (max-width: 350px) {
.name {
  font-size: 21px;
}
.profession {
  font-size: 20px;
}
.paragraph {
  font-size: 16px;
  justify-content: center;
  justify-items: center;
  color: #faedf0;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
}
</style>
