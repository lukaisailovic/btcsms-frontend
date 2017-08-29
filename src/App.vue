<template>
  <div id="app">
    <!--     Fonts and icons     -->
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,300,700' rel='stylesheet' type='text/css'>
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">



    <Navigation></Navigation>
    <div class="container mt-3">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import './assets/js/tether.min.js'
import './assets/js/jquery-3.2.1.js'
import './assets/js/bootstrap.min.js'
import './assets/js/paper-kit.js'
export default {
  name: 'app'
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */

}

</style>
