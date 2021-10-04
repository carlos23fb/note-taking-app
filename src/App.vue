<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong class="column-title">Notes</strong>
          <div v-for="note in notes" :key="note" class="notes">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong class="column-title">Timestamp</strong>
          <div v-for="timestamp in timestamps" :key="timestamp" class="timestamps">
            {{ timestamp }}
          </div>

        </div>
      </div>
      <input-component :placeholder="placeholder"></input-component>
    </div>
    <note-count-component></note-count-component>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent'
import NoteCountComponent from "@/components/NoteCountComponent";


export default {
  name: 'App',
  components: {
    'input-component': InputComponent,
    'note-count-component': NoteCountComponent

  },
  data() {
    return {
      placeholder: 'Enter a notes'
    }
  },
  computed:{
    notes(){
      return this.$store.getters.getNotes;
    },
    timestamps(){
      return this.$store.getters.getTimestamps;
    }
  }
}
</script>

<style lang="css">
html, body {
  height: 100%;
  background-color: #0a0a0a;

}

#app {
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}

.notes-section {
  width: 500px;
}

.columns {
  width: 100%;
}


.notes, .timestamps {
  padding: 5px 0px;
  color: #00d1b2;
}


.column-title {
  color: #cfcfcf;
}

</style>
