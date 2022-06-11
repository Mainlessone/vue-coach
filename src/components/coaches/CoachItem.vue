<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :text="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="contactPageLink">Contact</base-button>
      <base-button link to="/coaches/c1">View details</base-button>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    id: Number,
    firstName: String,
    lastName: String,
    rate: Number,
    areas: Array
  },

  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    contactPageLink() {
      return `${this.$route.path}/${this. id}/contact`;
    }
  },
  methods: {
    navigateToContact() {
      router.push(`/coaches/${this. id}/contact`);
    },
    navigateToDetails() {
      router.push("/coaches/c1");
    }
  }
}

</script>

<style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h3,
  h4 {
    margin: 0.5rem 0;
  }

  div {
    margin: 0.5rem 0;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
</style>