import Vue from 'vue';

export const state = () => ({
  items: {
    1: {
      id: 1,
      name: 'Pomdeter',
      price: 20,
    },
    2: {
      id: 2,
      name: 'Tomat',
      price: 20,
    },
    3: {
      id: 3,
      name: 'Karot',
      price: 30,
    }
  },
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
  }
}
