<template>
<div id="Contact" :class="dark?'dark container mt-5 pt-5':'container pt-5 mt-5'">
<div :class="dark ? 'darkMyContact has-text-centered pt-5 pb-5 mt-5 mb-5':'contact has-text-centered pt-5 pb-5 mt-5 mb-5'">Contact</div>
<div class="columns m-2 p-2">
<div class="column m-2 " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
<img src="/undraw_profile_data_re_v81r.svg"/>
</div>
<div class="column m-2" data-aos="zoom-in-left" data-aos-duration="3000">
<div :class="dark ? 'darkBox m-2 p-2':'box m-2 p-2'" >
  <form @submit.prevent="formData" >
        <b-field >Name
            <b-input v-model="Name" required></b-input>
        </b-field>
        <br/>
        <b-field >Email
            <b-input type="email"
            v-model="Email"
                required>
                
            </b-input>
        </b-field>
        <br/>

        <b-field>
        Message
            <b-input maxlength="500" type="textarea" v-model="Message" required></b-input>
        </b-field>
        <b-button native-type="submit" :style="dark? 'color:#ec255a;border-color: #ec255a; background:transparent': 'color:black;background:transparent;border-color: #ec255a'">Send</b-button>
    </form>
    </div>
    </div>
    </div>
</div>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
  name: 'IndexPage',
  data(){
      return{
          Name:"",
          Email:"",
          Message:""
      }
  },
   computed: {
      ...mapGetters(['dark'])
    },
    methods:{
        formData(){
            console.log("formData",this.Name,this.Message,this.Email)
            let formDetails={
                Name:this.Name,
                Email:this.Email,
                Message:this.Message
            }

      var xhr = new XMLHttpRequest();
      //Url of google sheets script.
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbyaHpNRYUOQRrZ1LIOvfhZsgoV5xefo28IBSQOrcAjAb3Tf-I7CcdrwyQcnp7VnrI8Spg/exec"
      );
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          alert(
            "Thank You for submitting your response. I will get back to you shortly."
          );
            this.Name= null
            this.Email= null
            this.Message= null
        }
      };
      xhr.onerror = (err) => {
        console.log("err", err);
      };
      var encoded = Object.keys(formDetails)
        .map(function (k) {
          return (
            encodeURIComponent(k) +
            "=" +
            encodeURIComponent(formDetails[k])
          );
        })
        .join("&");
      xhr.send(encoded);
        }
    }
}
</script>
<style scoped>
*{
  overflow-x: hidden;
  overflow-y: hidden;
}
.darkMyContact{
  font-size: 35px;
    font-weight: 600;
    color:#ec255a;
    padding: 20px;
}
.contact{
 font-size: 35px;
    font-weight: 600;
    color:#292C6D;
    padding: 20px;
}
.dark{
    background:black;
    color:white
}
.box{
    background:transparent;
}
.darkBox{
    background:#0F0F0E;
    color:white;
}
</style>
