<template>
  <span class="badge" :class="type">
    {{ upperCaseText }}
  </span>
</template>

<script>
export default {
  props: {

    type: {
      type: String,
      required: false,
      default: ''
    },

    text: {
      type: String,
      required: true,
      default: ''
    }
  },

  computed: {

    upperCaseText() {
      return this.text.toUpperCase();
    }

  }

}
</script>


<style>

  .badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
  }

  .frontend {
    background-color: #3d008d;
    color: white;
  }

  .backend {
    background-color: #71008d;
    color: white;
  }

  .career {
    background-color: #8d006e;
    color: white;
  }

</style>