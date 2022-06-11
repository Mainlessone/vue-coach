<template>
  <form @submit.prevent="submit">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First name</label>
      <input type="text" id="firstName" v-model.trim="firstName.value" @blur="clearValidity(firstName)">
      <p v-if="!firstName.isValid">First name must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" v-model.trim="lastName.value" @blur="clearValidity(lastName)">
      <p v-if="!lastName.isValid">Last name must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea name="description" id="description" rows="5" v-model.trim="description.value" @blur="clearValidity(description)">
      </textarea>
      <p v-if="!description.isValid">Description must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly rate</label>
      <input type="number" id="rate" v-model.number="rate.value" @blur="clearValidity(rate)">
      <p v-if="!rate.isValid">Rate must be greater than 0</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of expertise</h3>
      <div>
        <input type="checkbox" id="frontEnd" value="frontEnd" v-model="areas.value" @blur="clearValidity(areas)">
        <label for="frontEnd">FrontEnd development</label>
      </div>
      <div>
        <input type="checkbox" id="backEnd" value="backEnd" v-model="areas.value" @blur="clearValidity(areas)">
        <label for="backEnd">BackEnd development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.value" @blur="clearValidity(areas)">
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">Select at least one</p>
    </div>
    <p v-if="!isValid">Please fix the errors and submit again</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>

export default {
  emits: ['submitted'],
  data() {
    return {
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      description:  {
        value: '',
        isValid: true,
      },
      rate:  {
        value: 0,
        isValid: true,
      },
      areas:  {
        value: [],
        isValid: true,
      },
      isValid: true
    }
  },

  methods: {

    clearValidity(prop) {
      prop.isValid = true;
    },

    validate() {
      this.isValid = true;
      for(let d in this.$data) {
        if(!this.$data[d].hasOwnProperty('value')) return;

        if(this.$data[d].value === '' || this.$data[d].value <= 0 || typeof this.$data[d].value === Array && this.$data[d].value.length === 0) {
          this.$data[d].isValid = false;
          this.$data.isValid = false;
        } else {
          this.$data[d].isValid = true;
        }
      }
    },

    submit() {
      this.validate();

      if(!this.isValid) return;

      const formData = { ...this.$data };

      Object.keys(formData).map(p => formData[p] = formData[p].value);

      this.$emit('submitted', formData);
    }
  }
}
</script>

<style scoped>
  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }

  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }

  input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
  }

  input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  .invalid label {
    color: red;
  }

  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }
</style>
