<template>
  <div id="Resume" :class="dark? 'darkContainer container mt-5 pt-5' :'container mt-5 pt-5'">
    <div :class="dark? 'darkResume has-text-centered pt-5 pb-5 mt-5 mb-5':'has-text-centered Resume pt-5 pb-5 mt-5 mb-5'">Resume</div>
    <div class="m-5 info pl-5">PERSONAL INFO</div>
    <div class="columns m-5">
      <div class="column" data-aos="zoom-in-up" data-aos-duration="3000">
        <div class="columns">
          <div class="column">
            <p
              class="mt-5 pt-5"
              v-for="(value, name, index) in personalInfo1"
              :key="index"
            >
              {{ name }}:<span :style="dark ?'color:white':'color:black'">{{ value }}</span
              ><br />
            </p>
            <br />
          </div>
          <div class="column">
            <p
              class="mt-5 pt-5"
              v-for="(value, name, index) in personalInfo2"
              :key="index"
            >
              {{ name }}: <span :style="dark ?'color:white':'color:black'">{{ value }}</span>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div class="column" data-aos="zoom-in-down" data-aos-duration="3000">
        <div class="has-text-centered cardsData">
          <div :class="dark? 'darkCard p-4':'card p-4'" v-for="(name, index) in cardInfo" :key="index">
            <div class="count">{{ name.count }}</div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :style="dark ?'color:white':'color:black'"
            >
              <path d="M2 11H22V13H2V11Z" fill="currentColor" />
            </svg>
            <span class="m-5 p-5" :style="dark ?'color:white':'color:black'">{{ name.content }}</span>
          </div>
        </div>
        <b-button class="downloadButton p-5 "><a href="/PALLAVI Resume (1).pdf" download :style="dark ?'color:white':'color:black'">DOWNLOAD RESUME</a></b-button>
      </div>
    </div>
    <div :class="dark? 'darkResume has-text-centered':'has-text-centered Resume'">Skills</div>
    <div class="Progress" data-aos="fade-up"
    data-aos-duration="3000" 
     data-aos-anchor-placement="bottom-bottom">
      <radial-progress-bar
        v-for="(steps, index) in completedSteps"
        :key="index"
        :diameter="150"
        :completed-steps="steps.Exp"
        :total-steps="totalSteps"
        startColor="#EC255A"
        stopColor="#EC255A"
        innerStrokeColor="#f4d9df"
        :animateSpeed="3000"
      >
        <div class="has-text-centered">{{ steps.Skill }} {{ steps.Exp }}%</div>
      </radial-progress-bar>
    </div>
    <div :class="dark ? 'darkResume has-text-centered p-5':'has-text-centered Resume p-5'">EXPERIENCE &amp; EDUCATION</div>
    <div data-aos="zoom-in-up" data-aos-duration="3000" class="data">
      
      <div  class="details" v-for="(item, index) in workExperience" :key="index">
        <div class = "vertical"></div>
        <span
        
          class="p-2 m-5 workExperience"
          style="border-radius: 50px; border: 1px solid #ec255a"
        >
          {{ item.date }}
        </span>
        <p class="m-5">Post : {{ item.post }}</p>
        <p v-if="item.company" class="m-5">Company : {{ item.company }}</p>
        <p v-else class="m-5">University : {{ item.University }}</p>
        <p v-if="item.college" class="m-5">College : {{ item.college }}</p>
        <p v-if="item.Desc" class="m-5">Description : {{ item.Desc }}</p>
        
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters} from 'vuex';
import RadialProgressBar from 'vue-radial-progress'
export default {
  data() {
    return {
      personalInfo1: {
        Name: 'Pallavi Upadrista',
        Age: '22 Years',
        Phone: 9823156135,
        Langages: 'Hindi, English, Marathi, Telugu',
      },
      personalInfo2: {
        Nationality: 'Indian',
        Freelance: 'Available',
        Address: 'Civillines,Gondia(MH)',
        Email: 'pallaviupadrista@mail.com',
      },
      cardInfo: [
        { count: '1+', content: 'YEARS OF WORK EXPERIENCE' },
        { count: '5+', content: 'YEARS OF WORK EXPERIENCE' },
      ],
      completedSteps: [
        { Skill: 'HTML', Exp: 70 },
        { Skill: 'CSS', Exp: 60 },
        { Skill: 'Javascript', Exp: 80 },
        { Skill: 'Vue', Exp: 80 },
        { Skill: 'Firebase', Exp: 70 },
        { Skill: 'Figma', Exp: 50 },
        { Skill: 'Nuxt', Exp: 80 },
        { Skill: 'Bootstrap', Exp: 70 },
      ],

      totalSteps: 100,
      workExperience: [
        {
          date: ' 2022 - PRESENT',
          post: 'Full Stack Developer',
          company: 'Briq Consultancy, Pune India',
          Desc: 'The company automates the financial workflows of the construction business to improve the budget, forecast, and spend.',
        },
        {
          date: 'August 2021- Feburary 2021',
          post: 'Web Developer Intern',
          company: 'Cloudfumes, Gondia India',
          Desc: 'Cloudfumes is a start-up organisation that works on serverless web-technologies.',
        },
        {
          date: 'March 2021- May 2021',
          post: 'Web Developer Intern',
          company: 'Digitalbiz, Remote',
          Desc: 'Digitalbiz is a U.S based company works on web-techonlogies.',
        },
        {
          date: ' August 2017-  June 2021',
          post: 'Student',
          University: 'RTMNU university',
          college: 'Manoharbhai Patel Institute of Engineering and technology, Gondia. ',
        },
      ],
    }
  },
    computed: {
      ...mapGetters(['dark'])
    },
  components: {
    RadialProgressBar,
  },
}
</script>
<style scoped>
.darkContainer{
  background : black;
  color:white;
}
.darkResume{
    font-size: 35px;
  font-weight: 600;
  color: #ec255a;
  margin: 50px;
}
.Resume {
  font-size: 35px;
  font-weight: 600;
  color: #161853;
  margin: 50px;
}
.vertical {
            border-left: 1px solid gray;
            height: 200px;
            position:absolute;
            left: 50%;
        }
.data {
  display: flex;
  align-items: flex-start;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.details {
  margin: 80px;
  max-width: 500px;
}
.Progress {
  display: flex;
  gap: 150px;
  flex-wrap: wrap;
  padding-left: 90px;
}
.cardsData {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.count {
  font-size: 40px;
  font-weight: 600;
  color: #ec255a;
}
.card {
  background: transparent;
}
.darkCard{
  background:#0F0F0E;
}
.info {
  font-size: 25px;
  font-weight: 700;
}
.downloadButton {
  background:transparent;
  border-color: #ec255a;
  border-radius: 55px;
  width: 35%;
  margin-left: 30%;
  margin-right: 30%;
  cursor: pointer;
  margin-top: 50px;
}
button:hover{
  background: #ec255a;
}
.cardData {
  font-size: 14px;
  background-color: '#f4d9df';
  border-radius: 50px;
  display: block;
}
@media only screen and (max-width: 506px) {
.Progress {
  display: flex;
  /* justify-content: left; */
  /* align-items: flex-start; */
  gap: 100px;
  flex-wrap: wrap;
  padding-left: 50px;
}
}
@media only screen and (max-width: 1406px) {
.downloadButton {
  border-color: #ec255a;
  border-radius: 55px;
  width: 48%;
  margin-left: 30%;
  margin-right: 30%;
  cursor: pointer;
  margin-top: 50px;
}
        .data {
  display: flex;
  align-items: flex-start;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.details {
  margin: 40px;
  max-width: 400px;
}
}
@media only screen and (max-width: 977px) {

        .data {
  display: flex;
  align-items: flex-start;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.details {
  margin: 20px;
  max-width: 380px;
}
}
@media only screen and (max-width: 859px) {

        .data {
  display: flex;
  align-items: flex-start;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.details {
  margin: 40px;
  max-width: 450px;
}
.vertical {
  display:none;
            border-left: 1px solid gray;
            height: 200px;
            position:absolute;
            left: 50%;
        }
}
</style>
