<template>
  <div class="Bug text-center">
    <div
      class="row border-bottom border-info text-white mt-0"
      @click="selectBug()"
      v-if="openBugs && !bugData.closed || !openBugs">
      <div class="col-2">
        <h4>{{bugData.title}}</h4>
      </div>
      <div class="col-3 text-center">
        <h4>{{bugData.description}}</h4>
      </div>
      <div class="col-3">
        <h4>{{bugData.creatorEmail}}</h4>
      </div>
      <span class="col-2">
        <div v-if="bugData.closed == true" class="pl-3 text-danger text-center">
          <h4>Closed</h4>
        </div>
        <div v-else class="text-success">
          <h4>Open</h4>
        </div>
      </span>
      <div class="col-2">
        <h4>{{date()}}</h4>
      </div>
    </div>
    <hr />
  </div>
</template>


<script>
export default {
  name: "Bug",
  props: ["bugData", "openBugs"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectBug() {
      this.$store.commit("setActiveBug", {});
      this.$router.push({
        name: "Details",
        params: { bugId: this.bugData._id }
      });
    },
    date() {
      let date = this.bugData.updatedAt.split("T");
      return date[0];
    }
  },
  components: {}
};
</script>


<style scoped>
</style>