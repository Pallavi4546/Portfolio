<template>
  <div id="About" :class="dark ? 'darkaboutPage mt-5' : 'aboutPage mt-5'">
    <div class="columns p-5">
      <div class="column p-5 m-5" data-aos="fade-up"
    data-aos-duration="1000" >
      <img src="/undraw_portfolio_update_re_jqnp.svg" />
      </div>
      <div class="column p-5 m-5" data-aos="fade-up"
    data-aos-duration="1000" >
        <div
          :class="dark ? 'darkAboutMe' : 'aboutMe'"
        >
          ABOUT ME
        </div>
        <hr
          :style="
            dark
              ? 'width:40%; background-color:#ec255a'
              : 'width:40%; background-color:#292C6D'
          "
        />
        <div :class="dark ? 'darkFullName':'fullName '">I'm Pallavi Upadrista</div>
        <div >
          A Computer Engineer graduated with 9.5 CGPA , working as a Full Stack
          Developer/Web Developer with an experience over 1+ year. I am always
          energetic and eager to learn new skills.I have experience working as
          part of a team and individually.<br />
          Beside these I like to travel.I believe travelling gives you a new
          perspective to everything. You get to know a lot about different
          cultures, languages and all small unique things every place has to
          offer.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['dark']),
  },
}
</script>
<style scoped>
.aboutPage {
  padding: 40px;
}
.darkaboutPage {
  background: black;
  color: white;
  padding: 40px;
}
.darkAboutMe {
  font-size: 35px;
  font-weight: bold;
  color: #ec255a;
  padding: 20px;
}
.aboutMe {
  font-size: 35px;
  font-weight: bold;
  color: #292c6d;
  padding: 20px;
}
.darkFullName{
    padding-top: 20px;
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
  color:#ec255a
}
.fullName {
  padding-top: 20px;
  margin-top: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #292c6d;
}
.paragraph {
  /* padding: 30px; */
}
@media only screen and (min-width: 1370px) {
  .aboutMe {
    font-size: 25px;
    font-weight: bold;
    color: #292c6d;
  }
  .fullName {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    color: #292c6d;
  }
}
</style>
