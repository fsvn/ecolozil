<template>
  <div>
    <p>Met man prodwi ki pe vande dan ou kadi.</p>

    <div class="item-table" v-if="noItems > 0">
      <ItemStepCard
        v-for="item in items"
        :key="item._id"
        :item-id="item._id"
      />
    </div>
    <p v-else>
      Sorry, pena okenn prodwi ki pe vende en se momen.
    </p>

  </div>
</template>

<style scoped>
.item-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>

<script>
export default {
  computed: {
    items: function() {
      return this.$store.state.items;
    },
    noItems: function() {
      return Object.keys(this.items).length;
    }
  }
}
</script>
