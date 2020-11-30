<template>
  <div class="main">
    <div class="name">
      {{ item.name }}
    </div>

    <div style="display: flex">
      <div class="count">{{ count }}</div>
      <BaseButton @click.native="$store.commit('removeFromCart', item._id)">-</BaseButton>
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
  margin: 0.5em 0;
}

.main:first {
  border-radius: 1em;
}

.name {
  margin: 0;
}

.count {
  margin: 0 1em;
}
</style>


<script>
export default {
  props: ['itemId', 'count'],
  computed: {
    item: function() {
      return this.$store.state.items[this.itemId]
    }
  },
  methods: {
    removeFromCart: function() {

    }
  }
}
</script>
