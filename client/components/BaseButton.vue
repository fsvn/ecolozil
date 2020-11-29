<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  padding: 1em;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 0.5em;
  transition: 64ms;
}

button:hover {
  background: rgb(147, 211, 147);
}
</style>

<script>
export default {
  props: ['text']
}
</script>
