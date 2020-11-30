<template>
  <img
    style="border-radius: 1em"
    :width="size"
    :height="size"
    :src="image"
  >
</template>

<script>
export default {
  props: {
    itemId: String,
    size: Number,
    src: String
  },
  computed: {
    image: function() {
      if (this.item.image)
        return this.item.image;
      // If we could not get the item, get a placeholder.
      return `https://via.placeholder.com/${this.size}`;
    },
    item: function() {
      return this.$store.state.items[this.itemId];
    }
  }
}
</script>
