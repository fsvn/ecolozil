<template>
  <section>
    <h1>
      <span :class="{ ready: isReady }">{{ count }}</span>

      {{ title }}
    </h1>

    <slot />
  </section>
</template>

<style scoped>
span {
  display: inline-block;
  border: solid 1px rgb(147, 211, 147);
  border-radius: 100%;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  margin-right: 0.4em;
  transition: 128ms;
}

section {
  padding: 1em 0;
}

.ready {
  color: white;
  background: rgb(147, 211, 147);
}
</style>

<script>
export default {
  props: {
    count: Number,
    title: String,
    isReady: Boolean
  }
}
</script>
