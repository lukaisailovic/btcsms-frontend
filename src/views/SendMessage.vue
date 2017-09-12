<template>
  <div>

    <div class="alert alert-danger alert-with-icon" data-notify="container" v-if="!auth">
        <div class="container">
            <div class="alert-wrapper">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <i class="nc-icon nc-simple-remove"></i>
                </button>
                <div class="message">Looks like you are not signed in. You can still send message with BTC but it might not be so affordable due to transaction fees. We recommend that you create account and use balance to send messages</div>
            </div>
        </div>
    </div>

    <div class="section text-center" v-if="stage == 1">
    <div class="row justify-content-md-center">
      <div class="col-md-8">
          <h2 class="title">Send New Message</h2>
          <form class="" action="#" method="post" @submit.prevent="CheckIfNumberIsValid">
            <div :class="{'form-group':true,'has-danger':error.numberValidation }">

              <span class="form-text text-muted">Please enter number in international format (including the + before the number)</span>
              <input type="tel"  class="form-control" id="number" placeholder="Number" v-model="number" required>

              <span class="text-danger"v-show="error.numberValidation">Number you entered is not valid</span>
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-default btn-round" :disabled="number == '' || number.indexOf('+') == -1">Check number</button>
            </div>
          </form>
      </div>
    </div>
  </div>


  <div class="section text-center" v-if="stage == 2">
    <div class="row justify-content-md-center">
      <div class="col-md-7">
        <h2 class="title">What should we send to <strong>{{number}}</strong> ? </h2>
        <form class="" action="#" method="post" @submit.prevent="sendMessage">

          <div :class="{'form-group':true,'has-danger':BodyLength >150 }">
            <textarea  rows="8" cols="80" class="form-control" style="resize:none" v-model="body"></textarea>
            <span class="text-danger"v-if="BodyLength > 150">Message cannot be longer than 150 characters</span>
            <span class="form-text text-muted">Characters: {{BodyLength}}</span>
          </div>
          <div class="form-group text-center" v-if="price !== 0">
            <p class="form-text text-warning">Price for this message is <strong>{{price}} USD</strong></p>
          </div>
          <div class="form-group text-center" v-if="error.message !==''">
            <p class="text-danger">{{error.message}}</p>
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-default btn-round" :disabled="BodyLength == 0 || BodyLength > 150 || price == 0">Send message</button>
          </div>

        </form>

        <div class="form-group text-center" v-if="auth">
          <a href="#" @click.prevent="sendMessageNotAuth" :class="{'disabled': BodyLength == 0 || BodyLength > 150 || price == 0 }">I don't want to pay with my accounnt balance balance</a>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import config from "../config"
export default {
  name: 'hello',
  data () {
    return {
      number: "",
      body: "",
      price: 0,
      error: {
        numberValidation: false,
        message:"",
      },
      stage: 1,
    }
  },
  computed:{
    auth(){
      return this.$store.getters.User !== null && this.$store.getters.User !== undefined;
    },
    BodyLength(){
      return this.body.length
    }
  },
  methods:{
    CheckIfNumberIsValid(){
      //reset the errors
      this.error.numberValidation = false;

      axios.post(config.backend+'/number/check',{
        number: this.number,
      }).then((response) => {
        if (response.data.success == false) {
          this.error.numberValidation = true;
          this.number = "";
        } else {
          //number is valid, now get the price
          this.stage = 2;
          this.error.numberValidation = false;
          this.GetPriceForProvidedNumber()

        }
      }).catch((err)=>{
        console.log(err);
      });

    }, // end of method
    GetPriceForProvidedNumber(){
      axios.post(config.backend+'/number/price',{
        number: this.number,
      }).then((response)=>{

        if (response.data.success == false) {
          this.error.numberValidation = true;
          this.number = "";
          this.error.numberValidation = true;
          this.stage = 1;
        } else {
          this.price = response.data.price
        }

      }).catch((err)=>{

      });
    }, // end of method
    sendMessage(){
      this.error.message = '';
      let that = this;
      if (!this.auth) {
        this.sendMessageNotAuth();
      } else {
        let cfg = {'Authorization': localStorage.getItem("token")};
        axios({
        method: 'post',
        url: config.backend+'/message/send/authenticated',
        headers: cfg,
        data: {
          number: this.number,
          body: this.body,
          price: this.price
        }
      }).then((response)=>{
           if (response.data.success == true) {
             this.$router.push('/order/'+response.data.order.hash)
           } else {
             that.error.message = response.data.message;
           }

        }).catch((err)=>{});
      }

    }, // end of method
    sendMessageNotAuth(){
        this.error.message = '';
      axios.post(config.backend+'/message/send/unauthenticated',{
        number: this.number,
        body: this.body,
        price: this.price
      }).then((response)=>{
          this.$router.push('/order/'+response.data.order.hash)

      }).catch((err)=>{});

    }, // end of method
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.disabled {
    pointer-events: none;
}
</style>
