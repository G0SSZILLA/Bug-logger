
<template>
  <div class="home container-fluid ">
<div class="row">
  <div class="col-5 text-center text-white mt-5 pl-5">
    <h1>Current Bugs</h1>
  </div>
  <div class="col-4"></div>
  <div class="col-3 text-white pt-5">
    <!-- Material unchecked -->
<div class="form-check">
    <input type="checkbox" @click="toggleClosed()" class="form-check-input" id="materialUnchecked">
    <label class="form-check-label" for="materialUnchecked">Filter Closed</label>
</div>
  </div>
</div>
<div class="row">
  <div class="col-8 m-auto">
<div class="row mt-5 text-center text-white ">
      <div class="col-2">Title</div>
      <div class="col-3">Description</div>
      <div class="col-3">Reported By</div>
      <div class="col-2">Status</div>
      <div class="col-2">Last Modified</div>
</div>
<hr class="border-white">
  </div>
</div>
<div class="row">
  <div class="col-8 m-auto" >
   
     <Bug v-for="bug in bugs" :openBugs='showOpenBugs' :bugData='bug' :key="bug.id" />
  </div>
</div>


<div class="modal fade" id="orangeModalSubscription" tabindex="-1"  aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-notify modal-warning" role="document">
    <!--Content-->
    <div class="modal-content">
      <!--Header-->
      <div class="modal-header text-center">
        <h4 class="modal-title white-text w-100 font-weight-bold py-2">Log a Bug</h4>
        <button type="button" class="close" data-dismiss="modal " aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>

      <!--Body-->
      <div class="modal-body">
        <div class="md-form mb-5">
          <i class="fas fa-user prefix grey-text"></i>
          <input type="text" id="form3" class="form-control "  v-model="newBug.title">
          <label data-error="wrong" data-success="right" for="form3">Title</label>
        </div>
      
<div class="md-form">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="form2" class="form-control "  v-model="newBug.description">
          <label data-error="wrong" data-success="right" for="form2">Description</label>
        </div>
      
      </div>

      <!--Footer-->
      <div class="modal-footer justify-content-center">
        <button type="button" class="btn btn-primary waves-effect" data-dismiss="modal" @click.prevent="addBug()">Add</button>
      </div>
    </div>
    <!--/.Content-->
  </div>
</div>

<div class="text-center">
  <a href="" class="btn bg-white btn-rounded" data-toggle="modal" data-target="#orangeModalSubscription">Log a Bug!</a>
</div>



  
  </div>
</template>


<script>
import Bug from '../components/Bug'
export default {
  name: 'home',
  props:['bugData'],
  data(){
    return {
      newBug: {},
      showOpenBugs: false
      };
  },
  mounted(){
    this.$store.dispatch("getBugs", this.$route.params.bugId);
    this.$store.dispatch("getNotes", this.$route.params.bugId);
  },
  computed:{
      bugs() {
      return this.$store.state.bugs;
    }
  },
  methods:{
    addBug() {
      this.$store.dispatch("addBug", this.newBug);
        this.newBug = {};
    
    },

    toggleClosed(){
      console.log(this.showOpenBugs);
      
this.showOpenBugs = !this.showOpenBugs
    }
     
  },
  components:{Bug}
}
</script>


<style scoped>
/* .background{
  background-image: url(https://wallpapers2008.com/wall/wp-content/uploads/2019/04/Macbook-Pro-2018-v4-Wallpaper.-Thanks-to-AR7-Enjoy.jpg);
  background-size: cover;
 } */
</style>
