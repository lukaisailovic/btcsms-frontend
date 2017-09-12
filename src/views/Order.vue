<template>
  <div>

    <div  v-if="order !== null && failure == false">
      <div class="text-center">
        <h2 class="title">Message order</h2>
        <h4>#{{order.id}}</h4>

      <div v-if="order.paid == false">
        <h5 class="description mt-5">
          Looks like your order is not paid yet. Please sent at least <strong>{{order.btcprice}}</strong> <i class="fa fa-btc" aria-hidden="true"></i> to <strong>{{order.btcaddress}}</strong>
        </h5>
      </div>

      <div v-if="order.paid == true">
        <p class="mt-5">Looks like this order is paid and message is sent successfully !</p>
      </div>

      </div>
    </div>

    <div v-if="failure == true">
      <div class="text-center mt-5">
        <h2 class="title">Order not found</h2>
      </div>
    </div>

  </div>
</template>

<script>
import config from "../config"
export default {
  props: ['hash'],
  name: 'Order',
  data () {
    return {
      order: null,
      failure: false,
    }
  },

  mounted(){

    axios.post(config.backend+'/order/get',{
      hash: this.hash,
    }).then((response) => {
      if (response.data.success == false) {
        this.failure = true
      } else {
        this.order = response.data.order
      }

    }).catch((err)=>{});

    let that = this;
    setInterval(function(){
      that.checkIfOrderIsPaid()
    }, 10000);


  },
  methods:{
    checkIfOrderIsPaid(){
      if (this.order !==null && this.order !== undefined && this.order.paid == false) {
        axios.post(config.backend+'/order/check',{
          hash: this.hash,
        }).then((response) => {
          if (response.data.success == false) {
           if (response.data.paid == null) {
             this.failure = true
           }
          } else {
            this.order = response.data.order
          }

        }).catch((err)=>{});
      }
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
