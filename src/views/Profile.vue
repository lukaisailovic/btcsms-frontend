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
        <button type="button" name="button" class="btn btn-default">Update Balance</button>
      </div>

    </div>
  </div>
</template>

<script>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
