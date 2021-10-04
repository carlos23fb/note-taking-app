<template>
  <div class="note-count"> Note count: {{ noteCount }}</div>
</template>

<script>




export default {
  name: "NoteCountComponent",

  computed:{
    noteCount(){
      return this.$store.getters.getNoteCount
    }
  }

}


</script>

<style lang="css" scoped>
.note-count {
  margin-top: 48px;
}
</style>