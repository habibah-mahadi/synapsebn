<template>
  <div>
    <b-card-group deck v-if="patients">
      <b-card>
        <template v-slot:header>
            <h6 class="mb-0">Patient Details</h6>
        </template>
        <b-card-text>
          <ul class="list-unstyled">
            <li>Name: {{ patients.name }}</li>
            <li>Age: {{ patients.age }}</li>
            <li>Date of Birth: {{ patients.date_of_birth }}</li>
            <li v-if="patients.ic_attachment">
              <a href="#">View IC</a>
            </li>
            <li>Description: {{ patients.description }}</li>
          </ul>
        </b-card-text>
      </b-card>
      <b-card>
        <template v-slot:header>
          <h6 class="mb-0">Patient Sickness</h6>
        </template>
        <b-card-text>
          <ul class="list-unstyled">
            <li v-for="sickness in patients.sicknesses" v-bind:key="sickness.id">
              {{ sickness.name }}
            </li>
          </ul>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapGetters} from "vuex";
import VueFilterDateFormat from 'vue-filter-date-format';

Vue.use(VueFilterDateFormat);

export default {
  props:[
    'id'
  ],
  data () {
    return {
      dateFormatConfig: {
        dayOfWeekNames: [
          'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday'
        ],
        dayOfWeekNamesShort: [
          'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
        ],
        monthNames: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        monthNamesShort: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
      }
    };
  },
  name: 'Patient',
  methods: mapActions(['fetchSinglePatient']),
  computed: mapGetters(['patients']),
  created() {
    this.fetchSinglePatient(parseInt(this.id));
  }
}
</script>