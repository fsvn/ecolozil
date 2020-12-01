<template>
  <div>
    <h1>Register</h1>
    <div style="margin-bottom: 1em">
      <BaseInput placeholder="Nom" v-model="firstname" />
      <BaseInput placeholder="Dernie nom" v-model="lastname" />
      <BaseInput placeholder="Email" v-model="email" />
      <BaseInput type="password" placeholder="Password" v-model="password" />
    </div>

    <BaseButton @click.native="register">Register</BaseButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null
    }
  },
  methods: {
    register: async function() {
      let res = await this.$axios.post('/api/driver/register', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      });

      this.$store.commit('login', res.data);
      this.$router.push({ path: '/driver' });
    }
  }
}
</script>
