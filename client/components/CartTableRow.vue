<template>
  <div class="main">
    <div>
      <ItemImage :size=50 :item-id="itemId" />

      {{ item.name }}
    </div>

    <div style="display: flex">
      <div class="count">{{ count }}</div>
      <BaseButton @click.native="$store.commit('removeFromCart', itemId)">
        -
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  align-content: center;
  justify-content: space-between;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 0.2em;
  padding: 0.5em;
}

.count {
  margin: 0 1em;
}
</style>


<script>
export default {
  props: {
    itemId: String,
    count: Number
  },
  computed: {
    item: function() {
      return this.$store.state.items[this.itemId]
    }
  }
}
</script>
