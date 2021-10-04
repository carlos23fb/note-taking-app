<template>
  <div class="note-count"> Note count: {{ noteCount }}</div>
</template>

<script>

import emitter from "@/main";


export default {
  name: "NoteCountComponent",
  data() {
    return {
      noteCount: 0
    }
  },
  created() {
    emitter.on('add-note', () =>{
      this.noteCount++;
    })
  }

}


</script>

<style lang="css" scoped>
.note-count {
  margin-top: 48px;
}
</style>