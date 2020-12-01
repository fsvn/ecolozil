<template>
  <div>
    <p>Met ou man linformasion pu complet ou asa.</p>

    <div style="margin-bottom: 1em">
      <BaseInput
        placeholder="Nom"
        v-model="form.firstname"
        v-bind:error="!firstnameOk"
      />

      <BaseInput
        placeholder="Dernie Nom"
        v-model="form.lastname"
        v-bind:error="!lastnameOk"
      />

      <BaseInput
        placeholder="Email"
        v-model="form.email"
        v-bind:error="!emailOk"
      />

      <BaseInput
        placeholder="Nimero Telefonn"
        v-model="form.phone"
        v-bind:error="!phoneOk"
      />

      <BaseInput
        placeholder="Ancien Token"
        v-model="form.prevToken"
      />
    </div>

    <BaseButton @click.native="buy">
      Aste
    </BaseButton>

    <h2>Token</h2>
    <div v-if="token">
      <p>Ou token est: </p>
      <h4>{{ token }}</h4>
      <p v-if="credit > 0">
        Ou ena {{ credit }} credits, ou inn ggn {{ credit / 100}} % off!
      </p>
    </div>
    <div v-else>
      <p>Ou pa encore complet ou transaksion.</p>
    </div>

  </div>
</template>

<style scoped>
h2 {
  color: rgb(147, 211, 147);
}
</style>

<script>
export default {
  data: function() {
    return {
      token: null,
      credit: 0
    }
  },
  computed: {
    ready: function() {
      return this.shoppingReady &&
             this.locationReady &&
             this.buyReady;
    }
  },
  methods: {
    buy: async function() {
      if (this.buyReady) {
        let res = await this.$axios.post('/api/order', {
          form: this.form,
          cart: this.cart,
          marker: this.marker
        });

        this.token = res.data.token;
        this.credit = res.data.credit;
      }
    }
  }
}
</script>
