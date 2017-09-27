<template>
  <div>
    <div class="section text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h2 class="title">Let's talk {{name}}</h2>
                        <h5 class="description">Leka is an anonymous SMS tool by which is enabled through Bitcoin micropayments. Our simple setup and layout makes it easy to send a message from anyone, to anywhere.</h5>
                        <br>
                        <router-link :to="{ name: 'sendMessage', params: {} }" class="btn btn-danger btn-round">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i> Send Message
                        </router-link>

                    </div>
                </div>
				<br/><br/>
				<div class="row">
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-btc" aria-hidden="true"></i>
							</div>
							<div class="description">
								<h4 class="info-title">Cheap</h4>
								<p class="description">Minimal Fees put Leka in contention with typical Pay-as-you-go methods, especially with international messages.</p>
							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-fighter-jet" aria-hidden="true"></i>
							</div>
							<div class="description">
								<h4 class="info-title">Fast</h4>
								<p>Messages are delivered as soon as payment is confirmed</p>

							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-user-secret" aria-hidden="true"></i>
							</div>
							<div class="description">
								<h4 class="info-title">Anonymous</h4>
								<p>We don't ask any personal information from you. You can send messages without even creating an account</p>

							</div>
						</div>
					</div>
					<div class="col-md-3">
						<div class="info">
							<div class="icon icon-danger">
								<i class="fa fa-address-book-o" aria-hidden="true"></i>
							</div>
							<div class="description">
								<h4 class="info-title">Delightful design</h4>
								<p>Our easy to use layout makes sending SMS’s with Bitcoin accessible to everyone - everywhere.</p>

							</div>
						</div>
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

    }
  },
  computed:{
    name(){
      return config.name
    }
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
