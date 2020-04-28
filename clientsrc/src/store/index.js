import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";
// import Bug from "../../../server/models/Bug";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost") ?
    "http://localhost:3000/" :
    "/";

let api = Axios.create({
    baseURL: baseUrl + "api",
    timeout: 3000,
    withCredentials: true
});

export default new Vuex.Store({
    state: {
        profile: {},
        bug: {},
        bugs: {},
        activeBug: {},
        notes: {}
    },
    mutations: {
        setProfile(state, profile) {
            state.profile = profile;
        },
        setBugs(state, bugs) {
            state.bugs = bugs;
        },
        setActiveBug(state, bug) {
            state.activeBug = bug;
        },
        setNotes(state, notes) {
            state.notes = notes;
        },
    },
    actions: {
        setBearer({}, bearer) {
            api.defaults.headers.authorization = bearer;
        },
        resetBearer() {
            api.defaults.headers.authorization = "";
        },
        async getProfile({ commit }) {
            try {
                let res = await api.get("profile");
                commit("setProfile", res.data);
            } catch (error) {
                console.error(error);
            }
        },

        //#region Bugs

        async getBugs({ commit, dispatch }) {
            try {
                let res = await api.get("bugs");
                console.log("from get bug", res);
                commit("setBugs", res.data);
            } catch (error) {
                console.error(error, "getBugs Failed");
            }
        },

        async getBug({ commit, dispatch }, bugId) {
            try {
                let res = await api.get('bugs/' + bugId, bugId);
                console.log("activeBug", res.data);
                commit("setActiveBug", res.data);
            } catch (error) {
                console.error(error);
            }
        },

        async addBug({ commit, dispatch }, bugData) {
            try {

                let res = await api.post("bugs", bugData);
                router.push({
                    name: "Details",
                    params: { bugId: res.data._id }
                });
            } catch (error) {
                console.error(error, "addBug Failing");
            }
        },



        async editBug({ dispatch }, bug) {
            try {
                await api.put("bugs/" + bug._id, bug);
                dispatch("getBug", bug._id);
            } catch (error) {
                console.error(error, "editBug is Failing");
            }
        },

        //#endregion

        //#region Notes


        async getNotes({ commit, dispatch }, bugId) {
            try {
                let res = await api.get('bugs/' + bugId + '/notes')
                console.log('from get notes', res.data);
                commit('setNotes', res.data)
            } catch (error) {
                console.error(error, "getNotes Failed");

            }
        },
        async deleteNote({ commit, dispatch }, noteData) {
            try {
                console.log("deleteNote log", noteData);
                await api.delete('notes/' + noteData.id)
                dispatch('getNotes', noteData.bugId)
            } catch (error) {
                console.error(error, "deleteNote failed");
            }
        },

        async editNote({ dispatch }, noteData) {
            try {
                console.log('edit note in store', noteData);
                await api.put('notes/' + noteData.id, noteData)
                dispatch('getNotes', noteData)
            } catch (error) {
                console.error(error, 'editNote is Failing');
            }
        },

        async addNote({ commit, dispatch }, noteData) {
            console.log("new note", noteData);

            try {
                let res = await api.post('notes/', noteData)
                console.log("note data from addNote", noteData);
                dispatch("getNotes", noteData.bugId)
            } catch (error) {
                console.error(error, "addNote Failing");
            }

        },

        //#endregion
    },
});