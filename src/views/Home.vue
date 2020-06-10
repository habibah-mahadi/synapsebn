<template>
  <div>
    <b-container class="bv-example-row">
      <Patients />
    </b-container>
    <!-- <div v-for="patient in patients" v-bind:key="patient.id">{{patient.name}}</div> -->
    
  </div>
</template>

<script>
import Patients from "../components/Patients";

export default {
  name: 'Home',
  components: {
    Patients,
  }
}
</script>