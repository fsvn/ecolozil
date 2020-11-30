<template>
  <div>
    <h2>{{ item.name }}</h2>

    <ItemImage id="image" :size=200 :item-id="itemId" />

    <div id="container">
      <BaseButton id="add-btn" @click.native="$store.commit('addToCart', itemId)">
        <div>
          <span id="grade">{{ item.grade ? item.grade : "?" }}</span> Grad
        </div>

        <div>
          <FontAwesomeIcon icon="cart-plus" style="font-size: 1.5em"/>
          Rs {{ item.price }} / Livre
        </div>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<script>
export default {
  props: {
    itemId: String
  },
  computed: {
    item: function() {
      return this.$store.state.items[this.itemId]
    }
  }
}
</script>
