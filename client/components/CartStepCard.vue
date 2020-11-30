<template>
  <p>{{ item }} {{ count }}</p>
</template>

<script>
export default {
  props: ['itemId', 'count'],
  computed: {
    item: function() {
      return this.$store.state.items[this.itemId]
    }
  }
}
</script>
