export const state = () => ({
  cart: {},
  items: {
    1: {
      id: 1,
      name: 'Pome de terre',
      price: 20,
    },
    2: {
      id: 2,
      name: 'Pome d\' amour',
      price: 20,
    },
    3: {
      id: 3,
      name: 'Karot',
      price: 30,
    }
  }
});

export const mutations = {
  addToCart(state, itemId) {
    // Create item in cart if not exists.
    if (!state.cart[itemId]) {
      // Clone the object; otherwise Vue would not be able to track the newly
      // added properties.
      state.cart[itemId] = 0;
      state.cart = { ...state.cart };
    }

    state.cart[itemId]++;
  }
}
