<template>
  <input class="input is-small" type="text" :placeholder="placeholder" v-model="input" @keyup.enter="monitorEnterKey">
</template>

<script>

export default {
  name: "InputComponent",
  props: ['placeholder'],
  data() {
    return {
      input: ""
    }
  },
  emits: ["add-note"],
  methods: {
    monitorEnterKey() {
      this.$store.dispatch('addNote', this.input);
      this.$store.dispatch("addTimestamp", new Date().toLocaleString());
      this.input = '';
    }
  }
}
</script>

<style scoped>


</style>