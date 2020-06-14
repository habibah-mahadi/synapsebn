<template>
  <div>
    <b-container v-if="patients">
      <b-row>
        <b-col>
          <b-list-group>
            <b-list-group-item><router-link :to="{ name: 'Patient', params: { id: patients.id } }">Detail</router-link></b-list-group-item>
            <b-list-group-item><router-link :to="{ name: 'patient_sickness', params: { id: patients.id } }">Sickness</router-link></b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props:[
    'id'
  ],
  name: 'TemplatePatient',
  methods: mapActions(['fetchSinglePatient']),
  computed: mapGetters(['patients']),
  created() {
    this.fetchSinglePatient(parseInt(this.id));
  }
}
</script>