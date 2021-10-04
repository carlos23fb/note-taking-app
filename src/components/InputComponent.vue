<template>
  <input class="input is-small" type="text" :placeholder="placeholder" v-model="input" @keyup.enter="monitorEnterKey">
</template>

<script>
import emitter from "@/main";
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
      emitter.emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString()
      });
      this.input = '';
    }
  }
}
</script>

<style scoped>


</style>