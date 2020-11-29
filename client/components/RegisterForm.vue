<template>
  <form>
    <h1>Login</h1>
    <div class="row">
      <input type="text" name="email" placeholder="E-mail" required />
    </div>
    <div class="row">
      <input type="password" name="password" placeholder="Password" required />
    </div>
    <input type="button" value="Login" @click="login" />
  </form>
</template>
