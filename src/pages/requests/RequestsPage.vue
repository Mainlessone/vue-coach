<template>
  <section>
    <base-card>
      <header>
        <h2>Requests received</h2>
        <ul v-if="requests.length">
          <request-item v-for="request in requests" :key="request.id" v-bind="request"></request-item>
        </ul>
        <h3 v-else>You haven't received requests yet</h3>
      </header>
    </base-card>
  </section>
</template>

<script>
import RequestItem from './RequestItem';

export default {
  components: {
    RequestItem
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requestsOfLoggedCoach'];
    },
  }
}
</script>


<style scoped>
  header {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
  }

  h3 {
    text-align: center;
  }
</style>