<template>
  <div>
    <base-dialog :show="!!error" :title="error" @close="closeErrorDialog">
    <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="!isLoading && requests.length">
          <request-item v-for="request in requests" :key="request.id" v-bind="request"></request-item>
        </ul>
      <h3 v-else>You haven't received requests yet</h3>
     </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from './RequestItem';

export default {

  components: {
    RequestItem
  },

  data() {
    return {
      isLoading: false,
    };
  },

  created() {
    this.getRequests();
  },

  computed: {
    requests() {
      return this.$store.getters['requests/requestsOfLoggedCoach'];
    },
  },
  
  methods: {
    async getRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/getRequests');
      } catch(error) {
        this.error = error || 'Somethig failed';
      }

      this.isLoading = false;
    },

    closeErrorDialog() {
      this.error = null;
    }
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