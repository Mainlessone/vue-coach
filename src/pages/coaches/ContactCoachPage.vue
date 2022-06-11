<template>
  <form @submit.prevent="submit">
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email">
    </div>
    <div class="form-control">
      <label for="message">Leave your message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!isValid">Please enter valid value</p>
    <div class="actions">
      <base-button>Send</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      isValid: true
    }
  },

  methods: {

    validate() {
      this.isValid = true;
      if(this.email === '' || !this.email.includes('@') || this.message === '') {
        this.isValid = false;
      }
    },
    
    submit() {
      this.validate();

      if(this.isValid) {
        this.$store.dispatch('requests/contactCoach', { ...this.$data, coachId: this.$route.params.id});
        this.$router.replace('/coaches');
      }
    }
  }
}
</script>


<style scoped>
  form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
  }

  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }

  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }

  .errors {
    font-weight: bold;
    color: red;
  }

  .actions {
    text-align: center;
  }
</style>