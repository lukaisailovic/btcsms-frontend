<template>
  <div class="mt-5">
    <div class="row justify-content-md-center">
      <div class="col-lg-4">
        <form @submit.prevent="SignInSubmit">
          <div class="form-group ">
            <label for="username">Username</label>
            <input type="text" v-validate="'required|alpha_dash'" name="username" value="" v-model="username" class="form-control">
            <span class="text-danger"v-show="errors.has('username')">{{ errors.first('username') }}</span>

          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" v-validate="'required'" id="password"value="" v-model="password" class="form-control">
            <span class="text-danger"v-show="errors.has('password')">{{ errors.first('password') }}</span>
          </div>

          <div class="form-group text-center">
            <button type="submit" class="btn btn-round btn-block btn-success" :disabled="errors.any() || loading"> <i  v-show="loading" class="fa fa-circle-o-notch fa-spin"></i> Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import config from '../config'
import auth from '../auth'
export default {
  name: 'login',
  data () {
    return {
      username: "",
      password: "",
      loading: false,
    }
  },
  computed:{
    user(){
      return this.$store.getters.User
    }
  },
  methods:{
    SignInSubmit(){
        this.loading = true;
        axios.post(config.backend+'/auth/signin',{
          username: this.username,
          password: this.password
        }).then((response) => {
          this.loading = false
          if (response.data.success == false) {
            this.$swal('Oops...',response.data.message,'error');
            this.username = '',
            this.password = ''
          } else {
            //console.log(getUser(response.data.token))
            this.$swal('Good job!',response.data.message,'success');
            auth.Authenticate(response.data.token).then(()=>{
                auth.getUser().then((user)=>{
                  this.$store.dispatch('SignUserIn',user);
                }).catch((err)=>{

                });
            });
          }
        }).catch((err)=>{this.loading=false})
    },
  },
  watch:{
    user(value){
      if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
