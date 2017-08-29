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
              {{name}}
          </router-link>

          <div class="collapse navbar-collapse" id="navbar-primary">
              <ul class="navbar-nav ml-auto">
                    <router-link :to="{ name: '', params: {} }" tag="li" class="nav-item">
                        <a class="nav-link" href="#">&nbsp;Discover</a>
                    </router-link>

                    <router-link :to="{ name: 'signin', params: {} }" tag="li" class="nav-item" v-if="user == null">
                        <a class="nav-link" href="#"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Sign In</a>
                    </router-link>
                    <router-link :to="{ name: 'register', params: {} }" tag="li" class="nav-item" v-if="user == null">
                        <a class="nav-link" href="#"><i class="fa fa-user-plus" aria-hidden="true"></i>&nbsp;Register</a>
                    </router-link>
                    <li class="nav-item"  v-if="user !== null">
                      <a class="nav-link" href="#"> {{user.username}}</a>
                    </li>                  
                    <li class="nav-item"  v-if="user !== null">
                      <a class="nav-link" href="#" @click.prevent="SignUserOut"> Sign Out</a>
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
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
