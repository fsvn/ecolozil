<template>
  <div>
    <p>
      Check man prodwi ki ou finn met dan ou kadi avan aste.
      Ou ena {{ cartNoItems }} prodwi dan ou kadi.
    </p>
    <div class="cart-table">
      <div v-for="(count, id) in cart" :key="id">
        <p>{{ items[id] }} {{ count }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-table {
  display: flex;
  flex-direction: column;
}
</style>

<script>
export default {
  computed: {
    cart: function() {
      return this.$store.state.cart;
    },
    items: function() {
      return this.$store.state.items;
    },
    cartNoItems: function() {
      return Object.keys(this.cart).length;
    }
  }
}
</script>
