import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    patientlist: []
  },
  getters: {
    patients: state => state.patientlist
  },
  actions: {
    async fetchPatients({commit}) {
        const res = await axios.get("http://my-json-server.typicode.com/Fahmiin-Abdullah/patients_list/patients");
        commit('setPatients',res.data);
    },
    async fetchSinglePatient({commit}, id) {
        const res = await axios.get(`http://my-json-server.typicode.com/Fahmiin-Abdullah/patients_list/patients/${id}`);
        commit('setPatients',res.data);
    },
  },
  mutations: {
    setPatients: (state, patients) => (state.patientlist = patients),
  }
});
