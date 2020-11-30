<template>
  <div>
    <div id="cart-table">
      <CartTableEntry
        v-for="(count, id) in cart"
        :key="id"
        :item-id="id"
        :count="count"
      />
    </div>

    <h3>Total</h3>
    <h4>Rs {{ total }} </h4>
  </div>
</template>

<style scoped>
#cart-table {
  margin-bottom: 2em;
}

h4 {
  margin-bottom: 0;
}
</style>

<script>
export default {
  computed: {
    cart: function() {
      return this.$store.state.cart;
    },
    cartNoItems: function() {
      return Object.keys(this.cart).length;
    },
    items: function() {
      return this.$store.state.items;
    },
    total: function() {
      let total = 0;
      for (let [itemId, count] of Object.entries(this.cart))
        total += count * this.items[itemId].price;
      return total;
    }
  }
}
</script>
