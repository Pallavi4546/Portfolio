<template>
  <div :class="dark? 'darkMainPage' : 'mainPage'">
    <FrontPage/>
    <About />
    <MyResume/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: 'IndexPage',
   computed: {
      ...mapGetters(['dark'])
    },
}
</script>
<style scoped>
.darkMainPage{
  background:black
}
</style>
