<template>
  <div>
    <Step count="1" title="Prodwi">
      <ItemStep />
    </Step>

    <Step count="2" title="Kadi">
      <CartStep />
    </Step>

    <Step count="3" title="Lokasion">
      <LocationStep />
    </Step>

    <Step count="4" title="Aste">
      <BuyStep />
    </Step>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      // Dictionary of items in the cart.
      cart: {},
      // Dictionary of items.
      items: {
        1: {
          id: 1,
          name: 'Pome de terre',
          price: 20,
        },
        2: {
          id: 2,
          name: 'Pome d\' amour',
          price: 20,
        },
        3: {
          id: 3,
          name: 'Karot',
          price: 30,
        }
      }
    }
  },
  computed: {
    cartNoItems: function() {
      return Object.keys(this.cart).length;
    },
    cartItems: function() {
      return Object.keys(this.cart).map(id => this.items[id]);
    },
    noItems: function() {
      return Object.keys(this.items).length;
    }
  },
  methods: {
    addToCart: function(itemId) {
      if (!this.cart[itemId])
        this.$set(this.cart, itemId, 0);
      this.cart[itemId]++;
    }
  },
  async created() {
    try {
      this.items = await this.$axios.$get('/api/items');
    } catch (error) {
      // TODO: Set error message or something.
      console.log('Failed to retrieve items');
      console.log(error);
    }
  }
}
</script>
