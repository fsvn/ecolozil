<template>
  <div>
    <p>
      Welcome {{ driver.firstname }} {{ driver.lastname }}!
    </p>

    <section>
      <h1>Location</h1>
      <p>Your current location on the map.</p>

      <DriverMap />
    </section>

    <section>
      <h1>Information</h1>
      <p>
        Email: {{ driver.email }}
      </p>

      <BaseButton @click.native="onLogoutClicked">Logout</BaseButton>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    driver: function() {
      return this.$store.state.driver;
    }
  },
  methods: {
    onLogoutClicked: function() {
      this.$store.commit('logout');
      this.$router.push({ path: '/driver/login' });
    }
  },
  created() {
    if (!this.driver)
      this.$router.push({ path:'/driver/login' });
  }
}
</script>
