<template>
  <base-card>
    <h2>Find your coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontEnd" checked @change="setFilter">
      <label for="frontEnd">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backEnd" checked @change="setFilter">
      <label for="backEnd">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter">
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {

  emits: ['change-filter'],

  data() {
    return {
      filters: {
        frontEnd: true,
        backEnd: true,
        career: true
      }
    }
  },

  methods: {
    setFilter(event) {
      const id = event.target.id;
      const checked = event.target.checked;
      this.filters = {
        ...this.filters,
        [id]: checked
      };
      this.$emit('change-filter', { ...this.filters });
    }
  }

}

</script>

<style scoped>
  h2 {
    margin: 0.5rem 0;
  }

  .filter-option {
    margin-right: 1rem;
  }

  .filter-option label,
  .filter-option input {
    vertical-align: middle;
  }

  .filter-option label {
    margin-left: 0.25rem;
  }

  .filter-option.active label {
    font-weight: bold;
  }
</style>