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
      <input type="text" :value="item" @change="changeText($event, item)"/>
      <button v-on:click="addItem">Add</button>    
    </form>`,
  props: ['item'],
  methods: {
    changeText: function($event) {
      console.log($event)
      app.newItem = $event.target.value
    },
    addItem: function() {
      if(app.newItem === '') {
        return
      }
      //maxIdを取得
      let maxId = 0;
      app.items.forEach(function(e) {
        console.log(e.id)
        if(maxId < e.id) {
          maxId = e.id
        }
      })
      //maxId + 1でobj作成
      var newObj = {
        id: maxId + 1, todo: app.newItem, state: false
      }
      //itemsにセット
      app.items.push(newObj)
      app.newItem = ''
    }
  }
})

var app = new Vue({
  el: '#app',
  data: function(){
      return {
        items: [
          { id:1, todo: 'aaa', state: false },
          { id:2, todo: 'bbb', state: false },
          { id:3, todo: 'ccc', state: false },
        ],
        newItem: ''
      }
  }
})

