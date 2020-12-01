<template>
  <div>
    <h1>Login</h1>
    <div style="margin-bottom: 1em">
      <BaseInput
        placeholder="Email"
        v-model="email"
      />

      <BaseInput
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </div>

    <div style="display: flex">
      <BaseButton
        @click.native="onLoginClick"
        style="margin-right: 1em"
      >
        Login
      </BaseButton>

      <BaseButton @click.native="onRegisterClick">
        or register
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    onLoginClick: async function() {
      let res = await this.$axios.post('/api/driver/login', {
        email: this.email,
        password: this.password
      });

      this.$store.commit('login', res.data);
      this.$router.push({ path: '/driver' });
    },
    onRegisterClick: function() {
      this.$router.push({ path:'/driver/register' });
    }
  }
}
</script>
