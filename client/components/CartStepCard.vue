<template>
  <p>{{ item }} {{ count }}</p>
</template>

<script>
export default {
  props: ['itemId', 'count'],
  computed: {
    item: function() {
      return this.items[this.itemId]
    },
    items: function() {
      return this.$store.state.items;
    }
  }
}
</script>
