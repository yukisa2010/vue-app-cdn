Vue.component('todo-item', {
  template: `
  <li 
    v-bind:class="{ 'done': state }"
  >      
    <input 
      type="checkbox" 
      v-bind:checked="state"
      v-on:click="clicking($event, id)"
    >
    {{ todo }}
  </li>`,
  props: {
      id: Number,
      todo: String,
      state: Boolean
  },
  methods: {
    clicking: function($event, index) {
      const newItems = app.items.map(function(el) {
        if(el.id === index) {
          el.state = !el.state
        }
        return el
      })
      app.items = newItems
    }
  }
})

Vue.component('form-item', {
  template: `
    <form v-on:submit.prevent>
      <input type="text" v-bind:value="value" v-on:change="changeText($event)"/>
      <button v-on:click="addItem">Add</button>    
    </form>`,
  props: ['value'],
  methods: {
    changeText: function($event, value) {
      app.newItem = $event.target.value
    },
    addItem: function() {
      if(app.newItem === '') {
        return
      }
      //maxIdを取得
      let maxId;
      app.items.forEach(function(e) {
        if(maxId < e.id) {
          maxId = e.id
        }
      })
      //maxId + 1でobj作成
      var newObj = {
        id: maxId, todo: app.newItem, state: false
      }
      //itemsにセット
      app.items.push(newObj)
      app.newItem = ''
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
      items: [
        { id:1, todo: 'aaa', state: false },
        { id:2, todo: 'bbb', state: false },
        { id:3, todo: 'ccc', state: false },
      ],
      newItem: ''
  },
  })

  // data: {
  //     newItem: ''  
  // },
  // watch: {
  //   items: function(oldValue, newValue) {
  //     console.log('old:', JSON.stringify(oldValue))
  //     console.log('new:', JSON.stringify(newValue))
  //   },
  //   deep: true,
  //   immediate: true
  // },
  // methods: {
  // }
