<template>
  <div >
    <div class="text-center">
      <div class="title">
          <h2 class="title">Deposit Address</h2>
      </div>

      <div class="form-group">
        <div class="row justify-content-lg-center">
          <div class="col-lg-6">
            <input type="text" name="" :value="user.btcaddress" readonly class="form-control">
          </div>
        </div>
      </div>
      <div class="form-group">
        <p>This is your deposit address. Any coins you send here will be converted to USD and will be added to your account balance
        </p>
      </div>
      <div class="form-group text-center">
        <p class="text-muted">Balance not updating ? </p>
        <button type="button" name="button" class="btn btn-default" @click.prevent="checkBalance" :disabled="loading == true">
          <span v-if="loading == false">Update Balance</span>
          <span v-if="loading == true"><i class="fa fa-circle-o-notch fa-spin "></i> Checking</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import config from '../config'
import auth from '../auth'
export default {
  name: 'hello',
  data () {
    return {
      loading: false,
    }
  },
  computed:{
    user(){
      return this.$store.getters.User;
    }
  },
  methods:{
    checkBalance(){
      this.loading = true;
      console.log(true)
      let cfg = {'Authorization': localStorage.getItem("token")};
      axios({
      method: 'post',
      url: config.backend+'/balance/check/',
      headers: cfg,

    }).then((response)=>{
      this.loading = false;
         console.log(response)

        if (response.data.success == true) {
          auth.getUser().then((user)=>{
            this.$store.dispatch('SignUserIn',user);
          }).catch((err)=>{

          });
        }

      }).catch((err)=>{
        this.loading = false;
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
