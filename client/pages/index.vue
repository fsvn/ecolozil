<template>
  <div>
    <section>
      <h1><span class="step">1</span>Prodwi</h1>
      <p>Met man prodwi ki pe vande dan ou kadi.</p>

      <div class="item-table" v-if="items.length > 0">
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
      <h1><span class="step">2</span>Lokasion</h1>
      <p>Kot sa pu kit ou man prodwi?</p>

      <!-- TODO: Implement. -->
    </section>

    <section>
      <h1><span class="step">3</span>Kadi</h1>
      <p>
        Check man prodwi ki ou finn met dan ou kadi avan aste.
        Ou ena {{ noItems }} prodwi dan ou kadi.
      </p>
      <div class="cart-table">
        <div v-for="(count, item) in cart" :key="item.id">
          <p>{{ item }} {{ count }}</p>
        </div>
      </div>
    </section>

    <section>
      <h1><span class="step">4</span>Aste</h1>
      <p>Met ou man linformasion pu complet ou asa.</p>

      <!-- TODO: Implement. -->
    </section>

  </div>
</template>

<style scoped>
.step {
  display: inline-block;
  color: white;
  background: rgb(147, 211, 147);
  border-radius: 100%;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  margin-right: 0.8em;
}

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
      items: [
      {
        id: 1,
        name: 'Pome de terre',
        price: 20,
      },
      {
        id: 2,
        name: 'Pome d\' amour',
        price: 20,
      },
      {
        id: 3,
        name: 'Karot',
        price: 30,
      }],
      cart: {}
    }
  },
  computed: {
    noItems: function() {
      return Object.keys(this.cart).length;
    }
  },
  methods: {
    addToCart: function(item) {
      if (!this.cart[item.id])
        this.cart[item.id] = 0;
      this.cart[item.id]++;
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
