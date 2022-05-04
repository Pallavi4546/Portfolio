<template>
<div :class="dark ? 'darkFooter has-text-centered pt-5 pb-5 mt-5 ':'Footer has-text-centered pt-5 pb-5 mt-5 '" >&copy; 2022 Pallavi Upadrista</div>
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
.darkFooter{
background:#0F0F0E;;
color:white;
padding:30px
}
.Footer{

}
</style>