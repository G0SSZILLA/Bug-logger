<template>
  <section class="background colorOverlay" id="app">
    <navbar />
    <router-view />
  </section>
</template>

<script>
// import Home from "@/components/Home.vue"
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
// .background{
//   background-image: url(https://thewallpaper.co//wp-content/uploads/2017/10/windows-backgrounds-mountain-stock-photos-background-nature-rivers.jpg);
//   background-size: cover;
 

// }


// .colorOverlay:after {
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   z-index:1;
//   background:  rgba(0,0,0,.7);
//   // opacity: 0.6;
// }

</style>
