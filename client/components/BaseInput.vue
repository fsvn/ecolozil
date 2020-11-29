<template>
  <div>
    <input :type="type" :placeholder="placeholder"/>
  </div>
</template>

<style scoped>
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  padding: 0.8em 0.5em;
  margin: 0.4em 0em;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 0.5em;
}
</style>

<script>
export default {
  props: ['type', 'placeholder']
}
</script>
