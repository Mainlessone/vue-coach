<template>
  <section>
    <CoachFilter @change-filter="setFilters"></CoachFilter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach " link to="/register">Register a Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem v-for="coach in filteredCoaches" :key="coach.id" v-bind="coach"></CoachItem>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script>

import CoachItem from '../../components/coaches/CoachItem';
import CoachFilter from '../../components/coaches/CoachFilter';

export default {

  data() {
    return {
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

  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },

    filteredCoaches() {
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
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  },

  methods: {
    setFilters(updatedFilters) {
      console.log(updatedFilters)
      this.filters = updatedFilters;
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