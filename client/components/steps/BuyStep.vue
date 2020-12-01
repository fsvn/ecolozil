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
    </div>

    <BaseButton @click.native="buy">Aste</BaseButton>
  </div>
</template>

<script>
export default {
  computed: {
    ready: function() {
      return this.shoppingReady &&
             this.locationReady &&
             this.buyReady;
    }
  },
  methods: {
    buy: async function() {
      if (!this.buyReady)
        return false;

      let res = await this.$axios.post('/api/order', this.form);

      console.log(res);
    }
  }
}
</script>
