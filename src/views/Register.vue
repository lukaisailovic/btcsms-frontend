<template>
  <div class="mt-5">
    <div class="row justify-content-md-center">
      <div class="col-lg-4">
        <form @submit.prevent="RegisterSubmit">
          <div :class="{'form-group':true,'has-danger':errors.has('username')}">
            <label for="username">Username</label>
            <input type="text" v-validate="'required|alpha_dash'" name="username" value="" v-model="username" class="form-control">
            <span class="text-danger"v-show="errors.has('username')">{{ errors.first('username') }}</span>

          </div>
          <div :class="{'form-group':true,'has-danger':errors.has('password')}">
            <label for="password">Password</label>
            <input type="password" name="password" v-validate="'required|min:8|confirmed:passwordConfirm'" id="password"value="" v-model="password" class="form-control">
            <span class="text-danger"v-show="errors.has('password')">{{ errors.first('password') }}</span>
          </div>
          <div :class="{'form-group':true,'has-danger':errors.has('password')}">
            <label for="passwordConfirm">Confirm Password </label>
            <input type="password" name="passwordConfirm" id="passwordConfirm"value="" v-model="passwordConfirm" class="form-control">
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-round btn-block btn-success" :disabled="errors.any() || loading || username ==''"> <i  v-show="loading" class="fa fa-circle-o-notch fa-spin"></i> Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import config from '../config'
export default {
  name: 'register',
  data () {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
      loading: false,
    }
  },

  methods:{
    RegisterSubmit(){
        this.loading = true;
        axios.post(config.backend+'/auth/register',{
          username: this.username,
          password: this.password
        }).then((response) => {
          this.loading = false
          if (response.data.success == false) {
            this.$swal('Oops...',response.data.message,'error');
            this.username = '',
            this.password = '',
            this.passwordConfirm = ''
          } else {
            this.$swal('Good job!',response.data.message,'success');

          }


        }).catch((err)=>{this.loading=false})

    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
