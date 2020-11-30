import Vue from 'vue';

if (!Vue.__mixin__) {
  Vue.__mixin__ = true;
  Vue.mixin({
    computed: {
      shoppingReady: function() {
        return Object.keys(this.$store.state.cart).length > 0;
      },
      locationReady: function() {
        return this.$store.state.marker != null;
      },
      buyReady: function() {
        // TODO: Implement.
        return false;
      }
    }
  });
}
