import Vue from 'vue';

if (!Vue.__mixin__) {
  Vue.__mixin__ = true;
  Vue.mixin({
    computed: {
      form: function() {
        return this.$store.state.form;
      },
      items: function() {
        return this.$store.state.items;
      },
      cart: function() {
        return this.$store.state.cart;
      },
      marker: function() {
        return this.$store.state.marker;
      },
      firstnameOk: function() {
        return this.form.firstname;
      },
      lastnameOk: function() {
        return this.form.lastname;
      },
      emailOk: function() {
        return this.form.email;
      },
      phoneOk: function() {
        return this.form.phone;
      },
      shoppingReady: function() {
        return Object.keys(this.$store.state.cart).length > 0;
      },
      locationReady: function() {
        return this.$store.state.marker != null;
      },
      buyReady: function() {
        return this.firstnameOk &&
              this.lastnameOk &&
              this.emailOk &&
              this.phoneOk;
      }
    }
  });
}
