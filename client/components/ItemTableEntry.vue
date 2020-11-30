<template>
  <div>
    <h2>{{ item.name }}</h2>

    <ItemImage :size=200 :item-id="itemId" />

    <p>Rs {{ item.price }} la livre</p>

    <BaseButton @click.native="$store.commit('addToCart', itemId)">
      <FontAwesomeIcon icon="cart-plus" style="font-size: 1.5em"/>
    </BaseButton>
  </div>
</template>

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
