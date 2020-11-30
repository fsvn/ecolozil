import Vue from 'vue';

export const state = () => ({
  items: {},
  cart: {},
  marker: null
});

export const mutations = {
  setItems(state, items) {
    state.items = items;
  },
  setMarker(state, marker) {
    state.marker = marker;
  },
  addToCart(state, itemId) {
    // Create item in cart if not exists.
    if (!state.cart[itemId])
      // Ask Vue to track the newly added property.
      Vue.set(state.cart, itemId, 0);

    state.cart[itemId]++;
  },
  removeFromCart(state, itemId) {
    if (state.cart[itemId]) {
      let count = --state.cart[itemId];
      if (count == 0)
        delete state.cart[itemId];
    }
  }
}
