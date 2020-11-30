<template>
  <img
    :style="{ 'border-radius': borderRadius }"
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
    borderRadius: function() {
      return this.size < 200 ? '0.5em' : '1em';
    },
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
