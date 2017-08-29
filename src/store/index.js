import Vue from 'vue'
import Vuex from 'vuex'
import auth from "../auth"
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        User: null,

    },
    mutations:{
      SetUser(state,payload){
        state.User = payload;

      },
    },
    actions:{
      SignUserIn({commit},payload){
          commit('SetUser',payload)
        },
      SignUserOut({commit},payload){
        auth.signOut();
        commit('SetUser',null)
      }


    },
    getters:{
      User(state){
        
          return state.User
      },
    },


});
