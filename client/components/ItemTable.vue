<template>
  <div class="item-table">
    <ItemTableRow
      v-for="item in items"
      :key="item._id"
      :item-id="item._id"
    />
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
    }
  }
}
</script>
