<template>
  <div>
    <base-dialog :show="!!error" :title="error" @close="closeErrorDialog">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <CoachFilter @change-filter="setFilters"></CoachFilter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="getCoaches(true)">Refresh</base-button>
          <base-button v-if="!isLoading && !isCoach" link to="/register">Register a Coach</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="!isLoading && coaches.length">
          <CoachItem v-for="coach in coaches" :key="coach.id" v-bind="coach"></CoachItem>
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>

import CoachItem from '../../components/coaches/CoachItem';
import CoachFilter from '../../components/coaches/CoachFilter';

export default {

  data() {
    return {
      isLoading: false,
      error: null,
      filters: {
        frontEnd: true,
        backEnd: true,
        career: true,
      }
    }
  },

  components: {
    CoachItem,
    CoachFilter
  },

  created() {
    this.getCoaches();
  },

  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },

    coaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(c => {
        if(this.filters.frontEnd && c.areas.includes('frontEnd')) {
          return true;
        }
        if(this.filters.backEnd && c.areas.includes('backEnd')) {
          return true;
        }
        if(this.filters.career && c.areas.includes('career')) {
          return true;
        }
        return false;
      });
    }
  },

  methods: {
    setFilters(updatedFilters) {
      this.filters = updatedFilters;
    },

    async getCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches', { forceRefresh: refresh });
      } catch(error) {
        this.error = error.message || 'Something went wrong';
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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>