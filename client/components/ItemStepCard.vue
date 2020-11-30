<template>
  <div>
    <h2>{{ item.name }}</h2>

    <!-- TODO: Implement proper images. !-->
    <img width="200" height="200" src="https://via.placeholder.com/200">

    <p>Rs {{ item.price }} la livre</p>

    <BaseButton @click.native="$store.commit('addToCart', itemId)">
      <FontAwesomeIcon icon="cart-plus" style="font-size: 1.5em"/>
    </BaseButton>
  </div>
</template>

<style scoped>
img {
  border-radius: 1em;
}
</style>

<script>
export default {
  props: {
    itemId: String
  },
  computed: {
    item: function() {
      return this.$store.state.items[this.itemId]
    }
  }
}
</script>
