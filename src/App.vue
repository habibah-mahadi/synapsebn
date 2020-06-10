<template>
  <div id="app">
    <Navbar />
    <!-- <HeaderApp /> -->
    <router-view/>
  </div>
</template>

<script>
// import HeaderApp from "./components/HeaderApp";
import Navbar from "./components/Navbar";
export default {
  name: 'app',
  components: {
    // HeaderApp, 
    Navbar
  }
}
</script>
