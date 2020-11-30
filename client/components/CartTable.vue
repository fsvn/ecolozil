<template>
  <div>
    <div>
      <CartTableRow
        v-for="(count, id) in cart"
        :key="id"
        :item-id="id"
        :count="count"
      />
    </div>

    <p>Total: Rs {{ total }} </p>
  </div>
</template>

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
