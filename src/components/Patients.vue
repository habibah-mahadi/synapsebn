<template>
  <div>
    <b-container>

    </b-container>
    <b-jumbotron header="All Patients" lead="All patient records">
      <p></p>
    </b-jumbotron>
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-td>#</b-td><b-td>Name</b-td><b-td></b-td>
        </b-tr>
        <b-tr striped hover v-for="patient in patients" v-bind:key="patient.id">
          <b-td>{{ patient.id }}</b-td>
          <b-td>
            <router-link :to="{ name: 'Patient', params: { id: patient.id } }">
            {{ patient.name }}
            </router-link>
          </b-td>
          <b-td><router-link :to="{ name: 'Patient', params: { id: patient.id } }">View</router-link></b-td>
        </b-tr>
      </b-thead>
    </b-table-simple>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Patients',
  data() {
    return {

    }
  },
  methods: mapActions(['fetchPatients']),
  computed: {
    ...mapGetters(['patients']),
  },
  created(){
    this.fetchPatients();
  }
}
</script>
