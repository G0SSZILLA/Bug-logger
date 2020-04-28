<template>
  <div class="Details text-info">
    <div class="row">
      <!-- Bug Info  -->
      <div class="col-12 text-left">
        <p>Title:</p>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h1>{{bug.title}}</h1>
      </div>
      <div class="col-6"></div>
    </div>
    <div class="row">
      <div class="col-4">
        <span>
          <h5>
            Reported By:
            <h4>{{bug.creatorEmail}}</h4>
          </h5>
        </span>
      </div>

      <div class="col-4"></div>

      <!-- Status-->
      <div class="col-4">
        <h5>
          Closed:
          <h5>{{bug.closed}}</h5>
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-11 m-auto">
        <h2>{{bug.description}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-10"></div>
      <div class="col-2">
        <!-- NOTE Close & Edit Buttons-->
        <button class="btn btn-danger mr-3 btn-rounded shadow" v-if="!bug.closed" @click="closeBug()">Close Bug</button>
        <span>
          <button
            v-if="$auth.isAuthenticated &&  !bug.closed"
            class="btn bg-warning text-dark shadow"
            @click="editing = !editing"
          >Edit</button>
          <form v-if="editing" @submit.prevent="editBug">
            <input type="text" v-model="bug.title" />
            <button
              type="submit"
              v-if="$auth.isAuthenticated"
              class="btn btn-warning shadow"
            >Confirm</button>
          </form>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-2 text-left">
        <h2>Notes</h2>
      </div>
      <div class="col-10"></div>
    </div>
    <div class="row">
      <div class="col-9 m-auto">
        <!-- NOTE Notes get injected here -->

        <table
          id="dtDynamicVerticalScrollExample"
          class="table table-striped table-hover table-bordered table-sm"
          cellspacing="1"
          width="100%"
        >
          <thead>
            <tr>
              <th class="th-sm">Name</th>
              <th class="th-sm">Message</th>
              <th class="th-sm">Delete</th>
            </tr>
          </thead>
          <tbody>
            <Notes v-for="note in notes" :noteData="note" :key="note.id" />
          </tbody>
        </table>

        <div
          class="modal fade"
          id="orangeModalSubscription"
          tabindex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-notify modal-warning" role="document">
            <!--Content-->
            <div class="modal-content">
              <!--Header-->
              <div class="modal-header text-center">
                <h4 class="modal-title white-text w-100 font-weight-bold py-2"></h4>
                <button type="button" class="close" data-dismiss="modal " aria-label="Close">
                  <span aria-hidden="true" class="white-text">&times;</span>
                </button>
              </div>

              <!--Body-->
              <div class="modal-body">
                <div class="md-form mb-5">
                  <i class="fas fa-user prefix grey-text"></i>
                  <input type="text" id="form3" class="form-control" v-model="newNote.content" />
                  <label data-error="wrong" data-success="right" for="form3">Message</label>
                </div>

                <!-- <div class="md-form">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="form2" class="form-control "  v-model="newBug.description">
          <label data-error="wrong" data-success="right" for="form2"></label>
                </div>-->
              </div>

              <!--Footer-->
              <div class="modal-footer justify-content-center">
                <button
                  type="button"
                  class="btn  waves-effect"
                  data-dismiss="modal"
                  @click.prevent="addNote()"
                >Add</button>
              </div>
            </div>
            <!--/.Content-->
          </div>
        </div>

        <div class="text-center">
          <a
            href
            class="btn bg-success btn-rounded"
            data-toggle="modal"
            data-target="#orangeModalSubscription"
          >Add Comment</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10"></div>
      <div class="col-2">
        <!-- NOTE need to add an Add button here -->
      </div>
    </div>
  </div>
</template>


<script>
import Notes from "../components/Notes.vue";
import Bug from "../components/Bug.vue";
export default {
  name: "Details",
  props: ["bugData", "noteData", 'showOpenBugs'],

  data() {
    return {
      newNote: {},
      editing: false
    };
  },
  mounted() {
    this.$store.dispatch("getBug", this.$route.params.bugId);
    this.$store.dispatch("getNotes", this.$route.params.bugId);
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    },

    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    addNote() {
      this.newNote.bugId = this.$store.state.activeBug.id;
      this.$store.dispatch("addNote", this.newNote);
      this.newNote = {};
    },

  

    editBug() {
      this.$store.dispatch("editBug", this.bug);
      this.editing = false;
    },

    closeBug() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#20c997",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          let closeBug = this.bug;
          closeBug.closed = true;
          this.$store.dispatch("editBug", closeBug);
        }
      });
    }
  },
  components: { Bug, Notes }
};
</script>


<style scoped>
</style>