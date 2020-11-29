<template>
  <div>
    <h2>{{ item.name }}</h2>

    <!-- TODO: Implement proper images. !-->
    <img width="200" height="200" src="https://via.placeholder.com/200">

    <p>Rs {{ item.price }} la livre</p>

    <button @click="$store.commit('addToCart', item.id)">
      Met dan cadi
    </button>
  </div>
</template>

<style scoped>
img {
  border-radius: 1em;
}
</style>

<script>
export default {
  props: ['item'],
}
</script>
