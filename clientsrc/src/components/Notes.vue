<template>
  <tr class="notes">
    <td>{{noteData.creatorEmail}}</td>
    <td>{{noteData.content}}</td>
    <td class="ml-3">
      <button class="btn bg-transparent" @click="deleteNote()" v-if="$auth.isAuthenticated">
        <span class="text-danger">
          <strong>Delete Comment</strong>
        </span>
      </button>
    </td>
  </tr>
</template>


<script>
export default {
  name: "Notes",
  props: ["noteData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteNote() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.$store.dispatch("deleteNote", this.noteData);
          this.$router.push({ name: "Details" });
        }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>