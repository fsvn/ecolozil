<template>
  <span>{{ count }}</span>
</template>

<style scoped>
span {
  display: inline-block;
  color: white;
  background: rgb(147, 211, 147);
  border-radius: 100%;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  margin-right: 0.8em;
}
</style>

<script>
export default {
  props: ['count']
}
</script>
