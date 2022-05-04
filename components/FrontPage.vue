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
.panel {
  background: linear-gradient(111.7deg, #161853 60%, #292c6d 60%);
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
.profession {
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
  /* background: linear-gradient(to right, #72b527 50%, #ffffff 50%); */
  /* background: linear-gradient(60deg, #72b527 60%, #ffffff 60%); */
  padding-left: 30px;
}
.image-background2 {
  /* background-color: #ffffff; */
  padding-top: 90px;
  margin-top: 90px;
}
.moreButton {
  border-radius: 50px;
  color: #faedf0;
  background-color: #292c6d;
  border-color: #ec255a;
  width: 25%;
  margin-left: 40%;
  margin-right: 40%;
  cursor: pointer;
}
.darkMoreButton{
  border-radius: 50px;
  color: white;
  background-color: transparent;
  border-color: #ec255a;
  width: 25%;
  margin-left: 40%;
  margin-right: 40%;
  cursor: pointer;
}
button:hover{
  background:#ec255a;
  border:none;
 font-weight:700px
}

@media only screen and (max-width: 1669px) {
.panel {
  background: linear-gradient(109.5deg, #161853 60%, #292c6d 60%);
}
}
@media only screen and (max-width: 1600px) {
    .panel {
  background: linear-gradient(109deg, #161853 60%, #292c6d 60%);
}
}
@media only screen and (max-width: 1370px) {
     .panel {
  background: linear-gradient(108.8deg, #161853 60%, #292c6d 60%);
}
}
@media only screen and (max-width: 1329px) {
     .panel {
  background: linear-gradient(108.6deg, #161853 60%, #292c6d 60%);
}
}
@media only screen and (max-width: 1315px) {
.moreButton {
  width: 40%;
  margin-left: 33%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
.darkMoreButton{
    width: 40%;
  margin-left: 33%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
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
.moreButton {
  width: 45%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
.darkMoreButton{
  width: 45%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
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
.moreButton {
  width: 30%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
.darkMoreButton{
  width: 30%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
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
@media only screen and (max-width: 589px) {
    .moreButton {
  width: 38%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
} 
.darkMoreButton{
  width: 38%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
}
@media only screen and (max-width: 460px) {
    .moreButton {
  width: 42%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
.darkMoreButton{
 width: 42%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
} 
}
@media only screen and (max-width: 400px) {
    .moreButton {
  width: 48%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
} 
.darkMoreButton{
   width: 48%;
  margin-left: 30%;
  margin-right: 38%;
  margin-bottom: 50px;
  margin-top: 0px;
}
}

</style>
