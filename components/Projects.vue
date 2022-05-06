<template>
    <div id="Projects" :class="dark? 'dark mt-5 pt-5' :'mt-5 pt-5'">
         <div :class="dark ? 'darkMyProjects has-text-centered pt-5 pb-5 mt-5 mb-5':'myProjects has-text-centered pt-5 pb-5 mt-5 mb-5'"  data-aos="slide-down" data-aos-duration="1000">MY PROJECTS</div>
            <div class="data" >
                <div data-aos="zoom-in-up"  data-aos-duration="3000" :class="dark? 'darkCard m-5 p-5':'card m-5 p-5'" v-for="(items,index) in projectData" :key="index">
    <p class="title has-text-centered pt-3 pb-5 mt-3 mb-5" :style="dark? 'color:#ec255a;':'color:#292C6D;'">
      {{items.name}}
    </p>
       <img
        class="image"
         :src="items.img"
        >
    <p>
      {{items.content}}
    </p>
    <p><strong :style="dark ? 'color:white': 'color:black'">FrontEnd</strong> : {{items.FrontEnd}}</p>
    <p v-if="items.BackEnd"><strong :style="dark ? 'color:white': 'color:black'">BackEnd</strong> : {{items.BackEnd}}</p>
    <p><strong :style="dark ? 'color:white': 'color:black'">Project Link</strong> : <a class="dont-break-out" target="_blank" :style="dark ? 'color:white': 'color:black'" :href="items.ProjectLink">{{items.name}}</a></p>
  </div>
        </div>
    </div>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
  data() {
    return {
       projectData: [
        {
          name: 'PICXILENS',
          img: "/undraw_camera_re_cnp4.svg",
          content:
            'The app provides services to photography studios and freelancers to increase their productivity and promote themselves in the growing market.',
          FrontEnd: 'Nuxt.js',
          BackEnd: 'Firebase',
          ProjectLink: 'https://picxilens.com/',
        },
        {
          name: 'PORTFOLIO',
          img: "/undraw_portfolio_feedback_6r17.svg",
          content: 'This portfolio contains all the information about myself.',
          FrontEnd: 'Pure HTML and CSS',
          ProjectLink:
            'https://pallavi4546.github.io/Digitalbiz/Task1/task1.1/portfolio.html',
        },
        {
          name: 'PROJECT MANAGEMENT',
          img: './undraw_task_list_6x9d.svg',
          content:
            'This project helps the user to maintain the details of their project such as project description, category, team members, users, Tasks, and deadline of the project.',
          FrontEnd: ' HTML, CSS, Javascript',
          BackEnd: 'IndexDB',
          ProjectLink:
            'https://pallavi4546.github.io/Digitalbiz/Task1/task1.2/project.html',
        },
      ],
   
    }
  },
   computed: {
      ...mapGetters(['dark'])
    },
}
</script>
<style scoped>
.dark{
  background:black;
  color:white;
}
.darkMyProjects{
  font-size: 35px;
    font-weight: 600;
    color:#ec255a;
    padding: 20px;
}
.myProjects{
    font-size: 35px;
    font-weight: 600;
    color:#292C6D;
    padding: 20px;
}
.card{
    height: 635px;
    width: 550px;
}
.darkCard{
  background:#0F0F0E;
  height: 635px;
  width: 550px;
}
.data{
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
  flex-wrap: wrap;
}
.image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.dont-break-out {

  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

}
@media only screen and (max-width: 350px) {
 .darkMyProjects{
  font-size: 26px;
    font-weight: 600;
    color:#ec255a;
    padding: 20px;
}
.myProjects{
    font-size: 26px;
    font-weight: 600;
    color:#292C6D;
    padding: 20px;
}
.title{
  font-size:24px
}
}
</style>
