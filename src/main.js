import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state :{
    notes: [],
    timestamps: [],

  },
  mutations:{
    ADD_NOTE(state, payload){
      let newNote = payload;
      state.notes.push(newNote);
    },
    ADD_TIMESTAMP(state, payload){
      let newTimeStamp = payload;
      state.timestamps.push(newTimeStamp);
    }

  },
  actions:{
    addNote(context, payload){
      context.commit('ADD_NOTE', payload);
    },
    addTimestamp(context, payload){
      context.commit('ADD_TIMESTAMP', payload)
    }
  },
  getters:{
    getNotes: state => state.notes,
    getTimestamps: state => state.timestamps,
    getNoteCount: state => state.notes.length
  }
})




Vue.config.productionTip = false
import mitt from "mitt";
const emitter = mitt();
export default emitter;



new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
