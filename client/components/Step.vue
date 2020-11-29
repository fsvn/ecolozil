<template>
  <section>
    <h1><span>{{ count }}</span>{{ title }}</h1>
    <slot></slot>
  </section>
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

section {
  padding-bottom: 3em;
}
</style>

<script>
export default {
  props: ['count', 'title']
}
</script>
