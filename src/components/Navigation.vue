<template>
  <div class="">
    <nav class="navbar navbar-toggleable-md bg-primary">
      <div class="container">
          <button class="navbar-toggler navbar-toggler-right burger-menu" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar"></span>
              <span class="navbar-toggler-bar"></span>
              <span class="navbar-toggler-bar"></span>
</button>

          <router-link :to="{ name: 'welcome', params: {} }"  class="navbar-brand">
              <i class="fa fa-commenting-o" aria-hidden="true"></i> {{name}}
          </router-link>

          <router-link :to="{ name: 'about', params: {} }"  class="navbar-brand">
              <i class="fa fa-question-circle" aria-hidden="true"></i> About
          </router-link>

          <div class="collapse navbar-collapse" id="navbar-primary">
              <ul class="navbar-nav ml-auto">


                    <router-link :to="{ name: '', params: {} }" tag="li" class="nav-item" v-if="user !== null">
                        <a href="#" class="nav-link">{{user.balance}}$</a>
                    </router-link>

                    <router-link :to="{ name: 'signin', params: {} }" tag="li" class="nav-item" v-if="user == null">
                        <a class="nav-link" href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Sign In</a>
                    </router-link>
                    <router-link :to="{ name: 'register', params: {} }" tag="li" class="nav-item" v-if="user == null">
                        <a class="nav-link" href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Register</a>
                    </router-link>
                    <li class="nav-item dropdown" v-if="user !== null">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{{user.username}}</a>
                        <ul class="dropdown-menu dropdown-menu-right dropdown-info">
                          <router-link :to="{ name: 'profile', params: {} }" tag="li" class="dropdown-item" v-if="user !== null">
                              <a href="#">Profile</a>
                          </router-link>

                            <div class="dropdown-divider"></div>
                            <li class="dropdown-item"><a href="#pk" @click.prevent="SignUserOut">Sign Out</a></li>
                        </ul>
                    </li>

              </ul>
          </div>
      </div>
  </nav>
  </div>
</template>

<script>
import config from "../config"
import auth from "../auth"
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  computed:{
    user(){
      return this.$store.getters.User;
    }
  },

  created(){
    this.name = config.name;

  },

  methods:{
    SignUserOut(){
      this.$store.dispatch('SignUserOut',null);
      this.$router.push('/')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
