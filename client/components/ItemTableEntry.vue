<template>
  <div>
    <h2>{{ item.name }}</h2>

    <ItemImage
      id="image"
      :size=200
      :item-id="itemId"
    />

    <div id="container">
      <BaseButton id="add-btn" @click.native="$store.commit('addToCart', itemId)">
        <FontAwesomeIcon id="add-icon" icon="cart-plus" style="font-size: 1.5em"/>
        Rs {{ item.price }} / Livre
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
}

#image {
  margin-bottom: 1em;
}

#grade {
  font-size: 1.5em;
  font-weight: bold;
}

#add-btn {
  flex: 1;
  max-width: 200px;
  display: flex;
  flex-direction: row;
}

#add-icon {
  margin-right: 0.5em;
}
</style>

<script>
export default {
  props: {
    itemId: String
  },
  computed: {
    item: function() {
      return this.items[this.itemId];
    }
  }
}
</script>
