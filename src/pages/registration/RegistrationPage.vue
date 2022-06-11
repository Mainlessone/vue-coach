<template>
  <section>
    <base-card>
      <h2>Register as coach!</h2>
      <coach-form @submitted="submitted"></coach-form>
    </base-card>
  </section>
</template>

<script>

import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },

  methods: {
    submitted(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    }
  }
}

</script>
