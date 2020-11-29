<template>
  <form>
    <h1>Login</h1>
    <div class="row">
      <input type="text" name="email" v-model="email" placeholder="E-mail" required />
    </div>
    <div class="row">
      <input type="password" name="password" v-model="password" placeholder="Password" required />
    </div>
    <input type="button" value="Login" @click="submit" />
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    submit: function () {
      // Thing
    }
  }
}
</script>

<style>
.row {
  display: flex;
  flex-direction: rows;
}

.row input {
  width: 100%;
  height: 1rem;
  padding: 0.5rem;
  margin: 0.1rem 0;
}
</style>
