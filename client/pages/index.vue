<template>
  <div>
    <h1>Produi</h1>
    <p>Man produi ki pe vende.</p>

    <!-- TODO: Consider implementing as grid. !-->
    <div class="items-table" v-if="items.length > 0">
      <Item
        v-for="item in items"
        :key="item.id"
        :item="item"
      ></Item>
    </div>
    <p v-else>
      Pena okenn produi ki pe vende.
    </p>

  </div>
</template>

<style scoped>
.items-table {
  display: grid;
  /* TODO: Figure out how to automatically scale this. */
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

ul {
  padding: 0;
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
        name: 'Pome de terre',
        price: 20,
      },
      {
        name: 'Pome d\' amour',
        price: 20,
      },
      {
        name: 'Carrot',
        price: 30,
      }]
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
