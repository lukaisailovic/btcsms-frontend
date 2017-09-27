<template>
  <div>
    <footer class="footer section-dark">
    		<div class="container">
    			<div class="row">
    				<div class="text-center">
              <span class="copyright">
    						© {{year}}, made with <i class="fa fa-heart heart"></i> by {{author}} Powered by Senderon
    					</span>
    				</div>
    			</div>
    		</div>
    	</footer>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'footer',
  data () {
    return {

    }
  },
  computed:{
    year(){
      return new Date().getFullYear();
    },
    author(){
      return config.author
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
