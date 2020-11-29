<template>
  <div>
    <section>
      <h1><span class="step">1</span> Produi</h1>
      <p>Met man produi ki pe vande dan ou cadi.</p>

      <div class="items-table" v-if="items.length > 0">
        <Item
          v-for="item in items"
          :key="item.id"
          :item="item"
        ></Item>
      </div>
      <p v-else>
        Sorry, pena okenn produi ki pe vende en se momen.
      </p>
    </section>

    <section>
      <h1><span class="step">2</span> Cadi</h1>
      <p>Check man produi ki ou finn met dan ou cadi avan aste.</p>


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
}

.items-table {
  display: grid;
  /* TODO: Figure out how to automatically scale this. */
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
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
