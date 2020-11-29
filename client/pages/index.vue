<template>
  <div>
    <section>
      <h1><Step :count=1 />Prodwi</h1>
      <p>Met man prodwi ki pe vande dan ou kadi.</p>

      <div class="item-table" v-if="noItems > 0">
        <Item
          v-for="item in items"
          :key="item.id"
          :item="item"
          v-on:add-to-cart="addToCart"
        ></Item>
      </div>
      <p v-else>
        Sorry, pena okenn prodwi ki pe vende en se momen.
      </p>
    </section>

    <section>
      <h1><Step :count=2 />Kadi</h1>
      <p>
        Check man prodwi ki ou finn met dan ou kadi avan aste.
        Ou ena {{ cartNoItems }} prodwi dan ou kadi.
      </p>
      <div class="cart-table">
        <div v-for="(count, id) in cart" :key="id">
          <p>{{ items[id] }} {{ count }}</p>
        </div>
      </div>
    </section>

    <section>
      <h1><Step :count=3 />Lokasion</h1>
      <p>Kot sa pu delivre ou order?</p>

      <Map />
    </section>

    <section>
      <h1><Step :count=4 />Aste</h1>
      <p>Met ou man linformasion pu complet ou asa.</p>

      <!-- TODO: Implement. -->
    </section>

  </div>
</template>

<style scoped>
.item-table {
  display: grid;
  /* TODO: Figure out how to automatically scale this. */
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

.cart-table {
  display: flex;
  flex-direction: column;
}

section {
  padding-bottom: 3em;
}
</style>

<script>
export default {
  data() {
    return {
      cart: {},
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
