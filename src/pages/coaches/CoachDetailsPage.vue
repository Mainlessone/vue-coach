<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ coach.rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink" text="Contact us"></base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in coach.areas" :key="area" :type="area" :text="area"></base-badge>
        <p>{{ coach.description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
      default: false
    }
  },

  data() {
    return {
      coach: null
    }
  },

  computed: {
    fullName() {
      return `${this.coach.firstName} ${this.coach.lastName}`;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    }
  },

  created() {
    this.coach = this.$store.getters['coaches/coaches'].find(c => c.id === this.id);
  }

}
</script>