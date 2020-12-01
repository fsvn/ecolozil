<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      @input="onInput"
      v-model="value"
      v-bind:class="{ error: error }"
    />
  </div>
</template>

<style scoped>
.error {
  /* TODO: Figure out precedence on vue. */
  border-color: red !important;
}

input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  padding: 0.8em 0.5em;
  margin: 0.4em 0em;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 0.5em;
  transition: 128ms;
}
</style>

<script>
export default {
  props: ['placeholder', 'error'],
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', this.value);
    }
  }
}
</script>
